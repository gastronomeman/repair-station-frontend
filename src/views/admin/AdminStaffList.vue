<script setup>
import { ref } from 'vue'
import { orderCountService } from '@/api/staff.js'

const value1 = ref('')
const value2 = ref('')

const leaderboard = ref([])
const getOrdersList = async () => {
  const resp = await orderCountService(value1.value, value2.value)
  if (resp.code === 1) {
    leaderboard.value = resp.data
  }
}
getOrdersList()
</script>

<template>
  <nut-navbar title="维修统计"></nut-navbar>
  <div class="date-picker">
    <span class="demonstration">开始日期：</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="开始日期"
      value-format="YYYY-MM-DD HH:mm:ss"
    />
    <div class="br"></div>
    <span class="demonstration">结束日期：</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="结束日期"
      value-format="YYYY-MM-DD HH:mm:ss"
    />
    <div class="list-button">
      <nut-button type="info" @click="getOrdersList">查找</nut-button>
    </div>
    <nut-divider dashed></nut-divider>
  </div>
  <div v-for="(l, index) in leaderboard" :key="index" class="leaderboard">
    <nut-navbar>
      <template #left>
        <span class="nav-title">{{ l.name }}</span>
      </template>
      <template #right>
        <span class="nav-title">{{ l.orderCount }}单</span>
      </template>
    </nut-navbar>
    <nut-divider dashed />
  </div>
</template>

<style scoped>
.date-picker {
  width: 80%;
  margin: 20px auto;
  text-align: center;
  .br {
    margin: 10px 0;
  }
  .list-button {
    margin: 5px 0;
  }
  .nut-divider {
    margin: 5px 0;
  }
}
.leaderboard {
  width: 80%;
  margin: 0 auto;
  span {
    color: black;
  }
  .nut-divider {
    margin: 0;
  }
}
</style>
