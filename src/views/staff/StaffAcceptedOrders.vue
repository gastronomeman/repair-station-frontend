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

const tabs = ref('1')
</script>

<template>
  <nut-navbar title="任务"></nut-navbar>
  <nut-tabs v-model="tabs">
    <nut-tab-pane title="日常维修" pane-key="1">
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
              修单其实并不难哦，快去尝试一下吧！<br />遇到困难可以去寻求师兄师姐的帮助哦！<br />
              (*๓´╰╯`๓)♡
            </p>
          </template>
        </el-empty>
      </div>
    </nut-tab-pane>
    <nut-tab-pane title="摆摊" pane-key="2">
      <el-empty style="background: #f0f0f0">
        <template #description>
          <p>
            别着急师兄在写了<br />
            o(╥﹏╥)o<br />
            <a href="https://gitee.com/gastronome-0_0/repair-station-app"
              >https://gitee.com/gastronome-0_0/repair-station-app
            </a>
          </p>
        </template>
      </el-empty>
    </nut-tab-pane>
  </nut-tabs>
</template>

<style scoped>
.nut-tab-pane {
  background-color: #f0f0f0;
  padding: 0 !important;
  .loading {
    margin-bottom: 50px;
  }
}
</style>
