<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<template>
  <div v-if="route.fullPath === '/staff/profile'">
    <nut-navbar title="我的"></nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/staff/profile/order-history')"
    >
      <template #left><span class="nav-title">我的历史</span></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/staff/profile/leaderboard')"
    >
      <template #left><span class="nav-title">成员修单排行榜</span></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/staff/profile/change-password')"
    >
      <template #left><span class="nav-title">修改登录密码</span></template>
    </nut-navbar>
    <nut-navbar style="cursor: pointer">
      <template #left><span class="nav-title">帮助</span></template>
    </nut-navbar>
    <nut-navbar class="footer-navbar" title="退出"></nut-navbar>
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
.footer-navbar {
  margin-top: 160px;
}
</style>
