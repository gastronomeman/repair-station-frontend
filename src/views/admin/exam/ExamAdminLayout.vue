<script setup>
import { useRouter } from 'vue-router'
import { useAdminState } from '@/stores/index.js'
import { watch } from 'vue'

const adminState = useAdminState()

const router = useRouter()
const onClick = () => {
  router.push('/admin/profile')
}

watch(
  () => adminState.subTabs,
  async (t) => {
    if (t === '1') {
      await router.push('/admin/profile/exam/status')
    } else if (t === '2') {
      await router.push('/admin/profile/exam/sub')
    }
  },
  { immediate: true }
)
</script>

<template>
  <nut-sticky>
    <nut-navbar title="维修站答题系统" left-show @click-back="onClick">
      <template #left>
        <div>返回</div>
      </template>
    </nut-navbar>
  </nut-sticky>
  <nut-tabs v-model="adminState.subTabs" type="smile">
    <nut-tab-pane title="答题设置" pane-key="1">
      <router-view></router-view>
    </nut-tab-pane>
    <nut-tab-pane title="题目设置" pane-key="2">
      <router-view></router-view>
    </nut-tab-pane>
  </nut-tabs>
</template>

<style scoped>
.nut-tab-pane {
  padding: 0 !important;
  background-color: #f0f0f0;
}
</style>
