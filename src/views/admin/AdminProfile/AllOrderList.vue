<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const onClick = () => {
  if (route.fullPath.includes('admin')) router.push('/admin/profile')
  else router.push('/staff/profile')
}
</script>

<template>
  <nut-navbar title="所有维修单" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
</template>

<style scoped></style>
