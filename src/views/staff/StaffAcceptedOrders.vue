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
  <div class="loading" v-loading="loading">
    <div v-for="order in ordersList" :key="order.id">
      <div class="br">&nbsp;</div>
      <orders-task-item
        @refresh="refreshOrdersList"
        :order="order"
      ></orders-task-item>
    </div>
    <el-empty style="background: #f0f0f0" v-if="ordersList.length === 0">
      <template #description>
        <p>
          修单其实不难哦，去试一下吧！<br />不会的可以去找师兄师姐们帮助你哦！<br />
          (*๓´╰╯`๓)♡
        </p>
      </template>
    </el-empty>
  </div>
</template>

<style scoped>
.loading {
  margin-bottom: 50px;
}
</style>
