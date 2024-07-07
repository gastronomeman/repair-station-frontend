<script setup>
import { ref } from 'vue'
import { takingListService } from '@/api/orders.js'
import OrdersTaskItem from '@/components/orders/OrdersTaskItem.vue'

const ordersList = ref([])
const loading = ref(false)

const getOrdersList = async () => {
  loading.value = true
  const resp = await takingListService()
  if (resp.code === 1) {
    ordersList.value = resp.data
  }
  loading.value = false
}
getOrdersList()

const refreshOrdersList = async () => getOrdersList()
</script>

<template>
  <nut-navbar title="任务"></nut-navbar>
  <div v-for="order in ordersList" :key="order.id" v-loading="loading">
    <div class="br">&nbsp;</div>
    <orders-task-item
      @refresh="refreshOrdersList"
      :order="order"
    ></orders-task-item>
  </div>
  <el-empty style="background: #f0f0f0" v-if="ordersList.length === 0">
    <template #description>
      <p style="text-align: center; font-size: 20px">
        修修你的<br />˚‧º·(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )‧º·˚
      </p>
    </template>
  </el-empty>
</template>

<style scoped></style>
