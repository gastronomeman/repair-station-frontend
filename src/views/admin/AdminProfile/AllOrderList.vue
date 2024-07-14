<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { getFinishOrderService } from '@/api/orders.js'
import OrdersStaffItemSee from '@/components/orders/OrdersStaffItemSee.vue'

const router = useRouter()
const route = useRoute()
const onClick = () => {
  if (route.fullPath.includes('admin')) router.push('/admin/profile')
  else router.push('/staff/profile')
}

const page = ref({
  currentPage: 1,
  pageSize: 5,
  total: 0
})

const search = ref('')
const ordersList = ref('')
const getOrderList = async () => {
  const resp = await getFinishOrderService(
    page.value.currentPage,
    page.value.pageSize,
    search.value
  )
  if (resp.code === 1) {
    ordersList.value = resp.data.records
    page.value.total = resp.data.total
  }
}
getOrderList()

const change = async () => {
  await getOrderList()
}
const searchStaff = async () => {
  await getOrderList()
}

const resetList = async () => {
  search.value = ''
  await getOrderList()
}
</script>

<template>
  <nut-navbar title="所有维修单" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <div class="search">
    <el-input
      v-model="search"
      clearable
      style="width: 150px"
      placeholder="输入学号名字查询"
    />&nbsp;
    <nut-button type="info" size="small" @click="searchStaff">查询</nut-button>
    &nbsp;
    <nut-button type="info" size="small" @click="resetList">重置</nut-button>
    <nut-divider />
  </div>
  <div v-for="orders in ordersList" :key="orders.id" class="content">
    <orders-staff-item-see :order="orders"></orders-staff-item-see>
  </div>
  <div class="page">
    <nut-pagination
      v-model="page.currentPage"
      :total-items="page.total"
      :items-per-page="page.pageSize"
      @change="change"
    />
  </div>
</template>

<style scoped>
.search {
  width: 80%;
  margin: 15px auto;
  text-align: center;
}
.content {
  margin-bottom: 5px;
}
.br {
  margin-bottom: 50px;
}
.page {
  width: 90%;
  margin: 10px auto 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
