import { createRouter, createWebHistory } from 'vue-router'
import staffRoutes from './modules/staffRoutes.js'
import adminRoutes from './modules/adminRoutes.js'
import ordersRoutes from './modules/ordersRoutes.js'
import { useStaffState } from '@/stores/index.js'

const routes = [
  {
    path: '/:pathMatch(.*)*', // 捕获所有未匹配路径
    name: 'NotFound',
    component: () => import('@/views/error/NotFound.vue')
  },
  {
    path: '/tool',
    component: () => import('@/views/tool/Tool.vue')
  },
  {
    path: '/error',
    component: () => import('@/views/error/Error.vue')
  },
  ...ordersRoutes, // 导入 Orders 模块路由配置
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
    if (staffState.studentId === 'admin') {
      alert('管理员不能使用接单页面哦')
      return '/staff/login'
    }
  }
  if (to.path.startsWith('/admin') && staffState.studentId !== 'admin') {
    alert('成员不能进管理员页面哦')
    return '/staff/login'
  }
})
export default router
