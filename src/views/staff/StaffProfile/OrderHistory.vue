<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { historyListService } from '@/api/orders.js'
import OrdersStaffItemSee from '@/components/orders/OrdersStaffItemSee.vue'

const router = useRouter()
const loading = ref(true)

const onClick = () => {
  router.push('/staff/profile')
}

const orderList = ref([])
const getHistoryOrdersList = async () => {
  loading.value = true
  const resp = await historyListService()
  if (resp.code === 1) {
    orderList.value = resp.data
  }
  loading.value = false
}

getHistoryOrdersList()
</script>

<template>
  <nut-sticky>
    <nut-navbar title="我的历史" left-show @click-back="onClick">
      <template #left>
        <div>返回</div>
      </template>
    </nut-navbar>
  </nut-sticky>
  <el-skeleton :rows="5" animated :loading="loading">
    <div v-for="orders in orderList" :key="orders.value">
      <br />
      <orders-staff-item-see :order="orders"></orders-staff-item-see>
    </div>
  </el-skeleton>
</template>

<style scoped></style>
