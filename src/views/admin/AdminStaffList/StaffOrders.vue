<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { staffListService } from '@/api/orders.js'
import OrdersStaffItemSee from '@/components/orders/OrdersStaffItemSee.vue'

const router = useRouter()
const route = useRoute()

const onClick = () => {
  router.push('/admin/list')
}
const id = route.query.id

const orderList = ref([])
const getHistoryOrdersList = async () => {
  const resp = await staffListService(id)
  if (resp.code === 1) {
    orderList.value = resp.data
  }
}

getHistoryOrdersList()
</script>

<template>
  <nut-navbar title="成员历史" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <div v-for="orders in orderList" :key="orders.value">
    <br />
    <orders-staff-item-see :order="orders"></orders-staff-item-see>
  </div>
</template>

<style scoped></style>
