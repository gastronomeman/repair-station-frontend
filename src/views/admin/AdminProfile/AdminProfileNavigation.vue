<script setup>
import { useRouter, useRoute } from 'vue-router'
import { logoutService } from '@/api/staff.js'
import { useStaffState } from '@/stores/index.js'

const router = useRouter()
const route = useRoute()
const staffState = useStaffState()

const logout = async () => {
  await logoutService()
  await router.push('/staff/login')
  staffState.clear()
}
</script>

<template>
  <div v-if="route.fullPath === '/admin/profile'">
    <nut-navbar title="我的"></nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/admin/profile/leaderboard')"
    >
      <template #left><span class="nav-title">成员修单排行榜</span></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/admin/profile/add-member')"
    >
      <template #left><span class="nav-title">添加社员</span></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/admin/profile/all-order-list')"
    >
      <template #left><span class="nav-title">所有维修单</span></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/admin/profile/transfer-database')"
    >
      <template #left>
        <span class="nav-title">转存数据库（每一学年末，必使用）</span>
      </template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/admin/profile/change-password')"
    >
      <template #left><span class="nav-title">修改登录密码</span></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/admin/profile/help')"
    >
      <template #left><span class="nav-title">帮助</span></template>
    </nut-navbar>
    <nut-navbar class="footer-navbar" title="退出" @click="logout"></nut-navbar>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.nut-navbar--placeholder {
  margin: 0 0 10px;
  .nav-title {
    margin-left: 8px;
    color: black;
    font-size: 15px;
  }
}
</style>
