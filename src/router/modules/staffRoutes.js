import StaffLayout from '@/views/layout/StaffLayout.vue'
import StaffOrderBrief from '@/views/staff/StaffOrderAcceptance/StaffOrderBrief.vue'
import StaffOrderList from '@/views/staff/StaffOrderAcceptance/StaffOrderList.vue'
import StaffAcceptedOrders from '@/views/staff/StaffAcceptedOrders.vue'
import StaffProfileNavigation from '@/views/staff/StaffProfile/StaffProfileNavigation.vue'
import OrderHistory from '@/views/staff/StaffProfile/OrderHistory.vue'
import Leaderboard from '@/views/staff/StaffProfile/Leaderboard.vue'
import ChangePassword from '@/views/staff/StaffProfile/ChangePassword.vue'
import Help from '@/views/staff/StaffProfile/Help.vue'
import OrderDetails from '@/views/staff/StaffProfile/OrderDetails.vue'

export default [
  {
    path: '/staff',
    component: StaffLayout,
    redirect: '/staff/order-acceptance',
    children: [
      {
        path: 'login',
        component: () => import('@/views/staff/StaffLogin.vue')
      },
      {
        path: 'order-acceptance',
        meta: { requiresAuth: true },
        component: StaffOrderBrief
      },
      {
        path: 'order-acceptance/list',
        meta: { requiresAuth: true },
        component: StaffOrderList
      },
      {
        path: 'accepted-orders',
        meta: { requiresAuth: true },
        component: StaffAcceptedOrders
      },
      {
        path: 'profile',
        component: StaffProfileNavigation,
        meta: { requiresAuth: true },
        children: [
          {
            path: 'order-history',
            component: OrderHistory
          },
          {
            path: 'leaderboard',
            component: Leaderboard
          },
          {
            path: 'change-password',
            component: ChangePassword
          },
          {
            path: 'help',
            component: Help
          },
          {
            path: 'orders-details',
            component: OrderDetails
          }
        ]
      }
    ]
  }
]
