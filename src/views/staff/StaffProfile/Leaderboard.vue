<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { staffLeaderboardService } from '@/api/staff.js'

const router = useRouter()
const onClick = () => {
  router.push('/staff/profile')
}

const leaderboard = ref([])
const getLeaderboard = async () => {
  const resp = await staffLeaderboardService()
  if (resp.code === 1) {
    leaderboard.value = resp.data
  }
}
getLeaderboard()
</script>

<template>
  <nut-navbar title="排行榜" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <br />
  <div v-for="(l, index) in leaderboard" :key="index">
    <nut-navbar>
      <template #left>
        <span class="nav-title">{{ l.name }}</span>
      </template>
      <template #right>
        <span class="nav-title">{{ l.orderCount }}单</span>
      </template>
    </nut-navbar>
    <nut-divider dashed />
  </div>
</template>

<style scoped>
.nav-title {
  margin: 0 10px;
  color: black;
  font-size: 15px;
}
.nut-divider {
  background-color: white;
  margin: 0;
}
</style>
