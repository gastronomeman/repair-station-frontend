import AdminLayout from '@/views/layout/AdminLayout.vue'
import AdminMonitorStaff from '@/views/admin/AdminMonitorStaff.vue'
import AdminStaffList from '@/views/admin/AdminStaffList.vue'
import AdminProfileNavigation from '@/views/admin/AdminProfile/AdminProfileNavigation.vue'
import AddMember from '@/views/admin/AdminProfile/AddMember.vue'
import Leaderboard from '@/views/staff/StaffProfile/Leaderboard.vue'
import ChangePassword from '@/views/staff/StaffProfile/ChangePassword.vue'
import Help from '@/views/staff/StaffProfile/Help.vue'

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
            path: 'change-password',
            component: ChangePassword
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
