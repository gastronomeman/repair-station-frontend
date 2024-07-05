import { createRouter, createWebHistory } from 'vue-router'
import { getServerStatusService } from '@/api/repairStationStatus.js'
import staffRoutes from './modules/staffRoutes.js'
import adminRoutes from './modules/adminRoutes.js'

const routes = [
  {
    path: '/:pathMatch(.*)*', // 捕获所有未匹配路径
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/',
    component: () => import('@/views/layout/OrdersLayout.vue'),
    redirect: '/orders/new',
    children: [
      {
        path: 'orders/new',
        meta: { title: '电脑报修' },
        component: () => import('@/views/orders/NewOrder.vue')
      },
      {
        path: 'orders/announcements',
        meta: { title: '维修公告' },
        component: () => import('@/views/orders/Announcements.vue')
      },
      {
        path: 'orders/query',
        meta: { title: '报修查询' },
        component: () => import('@/views/orders/OrderQuery.vue')
      }
    ]
  },
  ...staffRoutes, // 导入 Staff 模块路由配置
  ...adminRoutes // 导入 Admin 模块路由配置
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  // 在导航之前设置页面标题
  document.title = to.meta.title || 'IT维修站'

  //订单的逻辑
  if (to.path.startsWith('/orders')) {
    const resp = await getServerStatusService()
    if (resp.code === 1 && to.path === '/orders/announcements') return '/'
    else if (resp.code === 0 && to.path !== '/orders/announcements')
      return '/orders/announcements'
  }
})
export default router
