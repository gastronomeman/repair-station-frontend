<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { historyListService } from '@/api/orders.js'
import OrdersStaffItem2 from '@/components/orders/OrdersStaffItem2.vue'

const router = useRouter()
const onClick = () => {
  router.push('/staff/profile')
}

const orderList = ref([])
const getHistoryOrdersList = async () => {
  const resp = await historyListService()
  if (resp.code === 1) {
    orderList.value = resp.data
  }
}

getHistoryOrdersList()
</script>

<template>
  <nut-navbar title="我的历史" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <div v-for="orders in orderList" :key="orders.value">
    <br />
    <orders-staff-item2 :order="orders"></orders-staff-item2>
  </div>
</template>

<style scoped></style>
