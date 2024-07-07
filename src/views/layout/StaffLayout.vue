<script setup>
import { Announcement, Order, Me, Home } from '@icon-park/vue-next'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const active = ref(0)

const refresh = ref(false)
const refreshFun = () => {
  setTimeout(() => {
    location.reload()
    refresh.value = false
  }, 800)
}

const tabSwitch = (item, index) => {
  console.log(item, index)
}

const frame = ref(true)
watch(
  () => route.fullPath,
  (newPath) => {
    frame.value = !newPath.includes('/staff/login')
  },
  { immediate: true }
)
</script>

<template>
  <nut-noticebar text="1111" scrollable v-if="frame">
    <template #left-icon>
      <announcement theme="outline" size="20" />
    </template>
  </nut-noticebar>
  <nut-pull-refresh v-model="refresh" @refresh="refreshFun">
    <router-view></router-view>
  </nut-pull-refresh>
  <nut-tabbar
    v-if="frame"
    v-model="active"
    @tab-switch="tabSwitch"
    :bottom="true"
    :safe-area-inset-bottom="true"
  >
    <nut-tabbar-item tab-title="首页" to="/staff/order-acceptance">
      <template #icon>
        <home theme="outline" size="25" :strokeWidth="3" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="报修订单" to="/staff/accepted-orders">
      <template #icon>
        <order theme="outline" size="25" :strokeWidth="3" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" to="/staff/profile">
      <template #icon>
        <me theme="outline" size="25" :strokeWidth="3" />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<style scoped></style>
