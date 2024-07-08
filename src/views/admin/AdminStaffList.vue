<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>

<template>
  <nut-navbar title="维修统计"></nut-navbar>

  <div class="date-picker">
    <span class="demonstration">开始日期：</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="开始日期"
      value-format="YYYY-MM-DD"
    />
    <div class="br"></div>
    <span class="demonstration">结束日期：</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="结束日期"
      value-format="YYYY-MM-DD"
    />
    <div class="list-button"><nut-button type="info">查找</nut-button></div>
    <nut-divider dashed></nut-divider>
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
</style>
