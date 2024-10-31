<script setup>
import { ref, watch } from 'vue'
import OrdersItem from '@/components/orders/OrdersItem.vue'
import { useRoute } from 'vue-router'
import { getOrderListByStudentIdService } from '@/api/orders.js'
import { isNotBlank } from '@/utils/StringUtils.js'

const route = useRoute()

const orderList = ref([])

const getOrderListByStudentId = async (studentId) => {
  if (isNotBlank(studentId)) return
  const resp = await getOrderListByStudentIdService(studentId)
  if (resp.code === 1) {
    orderList.value = resp.data
    if (orderList.value.length === 0) alert('查无此人')
  }
}

watch(
  () => route.query,
  (newPath) => {
    const { studentId } = newPath
    getOrderListByStudentId(studentId)
  },
  { immediate: true }
)
</script>

<template>
  <div v-if="orderList.length === 0">
    <el-empty description="暂无维修记录请在上方输入学号或姓名后尝试查询" />
  </div>
  <div v-else>
    <div v-for="order in orderList" :key="order.id">
      <orders-item :order="order"></orders-item>
    </div>
  </div>
</template>

<style scoped></style>
