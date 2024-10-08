import AdminLayout from '@/views/layout/AdminLayout.vue'
import AdminMonitorStaff from '@/views/admin/AdminMonitorStaff.vue'
import AdminStaffList from '@/views/admin/AdminStaffList/StaffList.vue'
import AdminProfileNavigation from '@/views/admin/AdminProfile/AdminProfileNavigation.vue'
import AddMember from '@/views/admin/AdminProfile/AddMember.vue'
import AllOrderList from '@/views/admin/AdminProfile/AllOrderList.vue'
import ChangePassword from '@/views/staff/StaffProfile/ChangePassword.vue'
import TransferDatabase from '@/views/admin/AdminProfile/TransferDatabase.vue'
import Help from '@/views/staff/StaffProfile/Help.vue'
import OrderDetails from '@/views/staff/StaffProfile/OrderDetails.vue'
import StaffOrders from '@/views/admin/AdminStaffList/StaffOrders.vue'
import AdminListLayout from '@/views/admin/AdminStaffList/Layout.vue'
import PhotoDir from '@/views/admin/AdminProfile/PhotoDir.vue'
import ShowPhoto from '@/views/admin/AdminProfile/ShowPhoto.vue'

export default [
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    redirect: '/admin/monitor-staff',
    children: [
      {
        path: 'monitor-staff',
        meta: { title: '管理员首页' },
        component: AdminMonitorStaff
      },
      {
        path: 'list',
        meta: { title: '订单查询' },
        component: AdminListLayout,
        redirect: '/admin/list/leaderboard',
        children: [
          {
            path: 'leaderboard',
            component: AdminStaffList
          },
          {
            path: 'orders',
            component: StaffOrders
          },
          {
            path: 'orders-details',
            component: OrderDetails
          }
        ]
      },
      {
        path: 'profile',
        meta: { title: '我的' },
        component: AdminProfileNavigation,
        children: [
          {
            path: 'add-member',
            component: AddMember
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
            path: 'photo-dir',
            component: PhotoDir
          },
          {
            path: 'show-photo',
            component: ShowPhoto
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
