import AdminLayout from '@/views/layout/AdminLayout.vue'
import AdminMonitorStaff from '@/views/admin/AdminMonitorStaff.vue'
import AdminStaffList from '@/views/admin/AdminStaffList/StaffList.vue'
import AdminProfileNavigation from '@/views/admin/AdminProfile/AdminProfileNavigation.vue'
import AddMember from '@/views/admin/AdminProfile/AddMember.vue'
import AllOrderList from '@/views/common/OrderListShow.vue'
import ChangePassword from '@/views/common/ChangePassword.vue'
import TransferDatabase from '@/views/admin/AdminProfile/TransferDatabase.vue'
import Help from '@/views/common/Help.vue'
import OrderDetails from '@/views/common/OrderDetails.vue'
import StaffOrders from '@/views/admin/AdminStaffList/StaffOrders.vue'
import PhotoDir from '@/views/common/photo/PhotoDir.vue'
import ShowPhoto from '@/views/common/photo/ShowPhoto.vue'

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
        path: 'orders-list',
        meta: { title: '订单统计' },
        component: AdminStaffList
      },
      {
        path: 'orders',
        meta: { title: '订单统计' },
        component: StaffOrders
      },
      {
        path: 'orders-details',
        meta: { title: '订单列表' },
        component: OrderDetails
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
            path: 'order-list',
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
