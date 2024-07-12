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
  <nut-navbar title="转存数据库" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <div class="t-sql">
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;这个功能是把整个学年的维修数据转存到历史订单的数据库。
    </p>
  </div>
</template>

<style scoped>
.t-sql {
  width: 80%;
  margin: 0 auto;
}
</style>
