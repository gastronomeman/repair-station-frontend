import AdminLayout from '@/views/layout/AdminLayout.vue'
import AdminMonitorStaff from '@/views/admin/AdminMonitorStaff.vue'
import AdminStaffList from '@/views/admin/AdminStaffList.vue'
import AdminProfileNavigation from '@/views/admin/AdminProfile/AdminProfileNavigation.vue'
import AddMember from '@/views/admin/AdminProfile/AddMember.vue'
import Leaderboard from '@/views/staff/StaffProfile/Leaderboard.vue'
import AllOrderList from '@/views/admin/AdminProfile/AllOrderList.vue'
import ChangePassword from '@/views/staff/StaffProfile/ChangePassword.vue'
import TransferDatabase from '@/views/admin/AdminProfile/TransferDatabase.vue'
import Help from '@/views/staff/StaffProfile/Help.vue'
import OrderDetails from '@/views/staff/StaffProfile/OrderDetails.vue'

export default [
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    redirect: '/admin/monitor-staff',
    children: [
      {
        path: 'monitor-staff',
        component: AdminMonitorStaff
      },
      {
        path: 'staff-list',
        component: AdminStaffList
      },
      {
        path: 'profile',
        component: AdminProfileNavigation,
        children: [
          {
            path: 'add-member',
            component: AddMember
          },
          {
            path: 'leaderboard',
            component: Leaderboard
          },
          {
            path: 'all-order-list',
            component: AllOrderList
          },
          {
            path: 'orders-details',
            component: OrderDetails
          },
          {
            path: 'change-password',
            component: ChangePassword
          },
          {
            path: 'transfer-database',
            component: TransferDatabase
          },
          {
            path: 'help',
            component: Help
          }
        ]
      }
    ]
  }
]
