import { createRouter, createWebHistory } from 'vue-router'
import staffRoutes from './modules/staffRoutes.js'
import adminRoutes from './modules/adminRoutes.js'

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/OrdersLayout.vue'),
    redirect: '/orders/new',
    meta: { title: '电脑维修' },
    children: [
      {
        path: 'orders/new',
        component: () => import('@/views/orders/NewOrder.vue')
      },
      {
        path: 'orders/announcements',
        component: () => import('@/views/orders/Announcements.vue')
      },
      {
        path: 'orders/query',
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

router.beforeEach((to, from, next) => {
  // 在导航之前设置页面标题
  document.title = to.meta.title || '默认标题'
  next()
})
export default router
