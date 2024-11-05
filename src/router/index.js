import { createRouter, createWebHistory } from 'vue-router'
import staffRoutes from './modules/staffRoutes.js'
import adminRoutes from './modules/adminRoutes.js'
import ordersRoutes from './modules/ordersRoutes.js'
import examRoutes from '@/router/modules/examRoutes.js'
import { useExamState, useStaffState } from '@/stores/index.js'
import { getServerStatusService } from '@/api/repairStationStatus.js'
import { errorMsg, successMsg } from '@/utils/SendMsgUtils.js'
import { dialog } from '@/utils/DialogUtils.js'

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
  ...ordersRoutes, // 导入 Orders 模块路由配置
  ...staffRoutes, // 导入 Staff 模块路由配置
  ...adminRoutes, // 导入 Admin 模块路由配置
  ...examRoutes //导入Exam 模块路由配置
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
    //如果resp.data.serverStatus === 0就是开启接单模式 ，
    // resp.data.serverStatus === 1 是停止接单
    if (resp.data.serverStatus === 0 && to.path === '/orders/announcements') {
      successMsg('欢迎前来报修<br />(ฅ´ω`ฅ)')
      return '/'
    } else if (
      resp.data.serverStatus === 1 &&
      to.path !== '/orders/announcements'
    ) {
      errorMsg('非常抱歉，接单暂时停止！<br /> (,,•́ . •̀,,)')
      return '/orders/announcements'
    }
  }

  const staffState = useStaffState()
  //后台登录逻辑
  if (
    (to.path.startsWith('/staff') && to.path !== '/staff/login') ||
    to.path.startsWith('/admin')
  ) {
    if (staffState.token === '') {
      await dialog('请先登录后再尝试吧！')
      return '/staff/login'
    }
  }

  if (!to.path.includes('/staff/login') && to.path.startsWith('/staff')) {
    if (staffState.studentId === 'admin') {
      await dialog('管理员不能使用接单页面哦')
      return '/staff/login'
    }
  }
  if (to.path.startsWith('/admin') && staffState.studentId !== 'admin') {
    await dialog('成员不能进管理员页面哦')
    return '/staff/login'
  }

  const examState = useExamState()
  if (to.path.startsWith('/exam')) {
    if (!examState.agreed && to.path !== '/exam/notice') {
      await dialog('出现了某些错误...')
      return '/exam/notice'
    }
  }
})
export default router
