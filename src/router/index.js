import { createRouter, createWebHistory } from 'vue-router'
import { getServerStatusService } from '@/api/repairStationStatus.js'
import staffRoutes from './modules/staffRoutes.js'
import adminRoutes from './modules/adminRoutes.js'
import { useStaffState } from '@/stores/index.js'

const routes = [
  {
    path: '/:pathMatch(.*)*', // 捕获所有未匹配路径
    name: 'NotFound',
    component: () => import('@/views/common/NotFound.vue')
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
  document.title = to.meta.title || 'ITeam维修站'

  //订单的逻辑
  if (to.path.startsWith('/orders')) {
    const resp = await getServerStatusService()
    //如果resp.code === 1就是开启接单模式，=== 0 是停止接单
    if (resp.code === 1 && to.path === '/orders/announcements') return '/'
    else if (resp.code === 0 && to.path !== '/orders/announcements')
      return '/orders/announcements'
  }

  const staffState = useStaffState()
  //后台逻辑
  if (
    (to.path.startsWith('/staff') && to.path !== '/staff/login') ||
    to.path.startsWith('/admin')
  ) {
    if (staffState.token === '') {
      alert('请先登录后尝试吧')
      return '/staff/login'
    }
  }

  if (!to.path.includes('/staff/login') && to.path.startsWith('/staff')) {
    if (staffState.name === 'admin') {
      alert('管理员不能使用接单页面哦')
      return '/staff/login'
    }
  }
  if (to.path.startsWith('/admin') && staffState.name !== 'admin') {
    alert('成员不能进管理员页面哦')
    return '/staff/login'
  }
})
export default router
