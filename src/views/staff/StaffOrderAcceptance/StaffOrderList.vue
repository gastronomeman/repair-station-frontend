<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const title = ref('')
const { orderType } = route.query

if (orderType === '1') title.value = '软件类'
else if (orderType === '2') title.value = '硬件类'
else if (orderType === '3') title.value = '网络类'
else if (orderType === '4') title.value = '手机类'

const onClick = () => {
  router.push('/staff/order-acceptance')
}
</script>

<template>
  <nut-navbar :title="title" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
</template>

<style scoped></style>
