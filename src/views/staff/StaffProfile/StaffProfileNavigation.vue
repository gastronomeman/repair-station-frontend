<script setup>
import { useRouter, useRoute } from 'vue-router'
import { logoutService } from '@/api/staff.js'
import { useStaffState } from '@/stores/index.js'
import { Logout, Me, Right } from '@icon-park/vue-next'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()
const staffState = useStaffState()

const logoutUser = async () => {
  await logoutService()
  await router.push('/staff/login')
  staffState.clear()
}

const name = computed(() => {
  let temp = staffState.name
  if (temp.length === 3) temp = temp.slice(-2)

  return `Hi，${temp}同学 ^o^ !`
})
</script>

<template>
  <div v-if="route.fullPath === '/staff/profile'">
    <nut-navbar class="title" title="我的"></nut-navbar>
    <div class="info">
      <me
        class="icon-center"
        theme="two-tone"
        size="55"
        :fill="['#9b9b9b', '#2c68ff']"
        strokeLinejoin="miter"
      />
      <span>{{ name }}</span>
    </div>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/staff/profile/order-history')"
    >
      <template #left><span class="nav-title">我的历史</span></template>
      <template #right
        ><right
          class="icon-center"
          theme="two-tone"
          size="25"
          strokeLinejoin="miter"
      /></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/staff/profile/leaderboard')"
    >
      <template #left><span class="nav-title">成员修单排行榜</span></template>
      <template #right
        ><right
          class="icon-center"
          theme="two-tone"
          size="25"
          strokeLinejoin="miter"
      /></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/staff/profile/change-password')"
    >
      <template #left><span class="nav-title">修改登录密码</span></template>
      <template #right
        ><right
          class="icon-center"
          theme="two-tone"
          size="25"
          strokeLinejoin="miter"
      /></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/staff/profile/uploader')"
    >
      <template #left><span class="nav-title">拆机照片核对</span></template>
      <template #right
        ><right
          class="icon-center"
          theme="two-tone"
          size="25"
          strokeLinejoin="miter"
      /></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/staff/profile/photo-dir')"
    >
      <template #left><span class="nav-title">上传照片文件夹</span></template>
      <template #right
        ><right
          class="icon-center"
          theme="two-tone"
          size="25"
          strokeLinejoin="miter"
      /></template>
    </nut-navbar>
    <nut-navbar
      style="cursor: pointer"
      @click="router.push('/staff/profile/help')"
    >
      <template #left><span class="nav-title">帮助</span></template>
      <template #right
        ><right
          class="icon-center"
          theme="two-tone"
          size="25"
          strokeLinejoin="miter"
      /></template>
    </nut-navbar>
    <nut-navbar class="footer-navbar" @click="logoutUser">
      <template #content>
        <span
          style="
            font-weight: bold;
            font-size: 15px;
            color: black;
            margin-right: 5px;
          "
          >退出</span
        >
        <logout
          class="icon-center"
          theme="filled"
          size="20"
          fill="#000000"
          strokeLinejoin="miter"
        />
      </template>
    </nut-navbar>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.nut-navbar--placeholder {
  border-top: 1px solid #9b9b9b;
  border-bottom: 1px solid #9b9b9b;
  .nav-title {
    margin-left: 8px;
    color: black;
    font-size: 15px;
  }
}
.title {
  margin: 0;
  border: 0;
}
.info {
  background-color: white;
  padding: 10px 15px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  span {
    margin: 0 5px;
  }
}
.icon-center {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.footer-navbar {
  border: 0;
  margin-top: 18px;
}
</style>
