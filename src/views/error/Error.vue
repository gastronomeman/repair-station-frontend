<script setup>
import OrdersFooter from '@/components/orders/OrdersFooter.vue'
import { ref } from 'vue'

const time = ref(window.config.time)

// 当前日期
let currentDate = new Date()

// 计算毫秒差值
let timeDifference = Math.abs(time.value.getTime() - currentDate.getTime())

if (time.value.getTime() - currentDate.getTime() <= 0) timeDifference = 0
</script>

<template>
  <div class="base">
    <h1>(＞﹏＜)，很抱歉</h1>
    <h1>后台数据库正在维护请稍等片刻</h1>
    <div class="time-box">
      <van-count-down :time="timeDifference">
        <template #default="timeData">
          <span class="block">{{ timeData.days }}</span>
          <span class="colon">天</span>
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">小时</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">分</span>
          <span class="block">{{ timeData.seconds }}</span>
          <span class="colon">秒</span>
        </template>
      </van-count-down>
    </div>

    <div>
      <img src="@/assets/rs_logo.png" alt="" />
    </div>
  </div>
  <orders-footer></orders-footer>
</template>

<style scoped>
.base {
  max-width: 800px;
  width: 95%;
  margin: 50px auto 10px;
  text-align: center;

  .time-box {
    margin: 30px auto;

    .colon {
      display: inline-block;
      margin: 0 5px;
      color: #1989fa;
      font-size: 25px;
    }
    .block {
      font-size: 25px;
      display: inline-block;
      width: 35px;
      color: #fff;
      text-align: center;
      background-color: #1989fa;
      padding: 5px;
    }
  }
}
</style>
