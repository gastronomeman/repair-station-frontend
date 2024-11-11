<script setup>
import { ref } from 'vue'

const sub = ref('')
</script>

<template>
  <div class="search">
    <el-input
      v-model="sub"
      clearable
      style="width: 150px"
      placeholder="请输入题目以查询"
    />&nbsp;
    <nut-button type="info" size="small">查询</nut-button>
    &nbsp;
    <nut-button type="info" size="small">重置</nut-button>
  </div>
  <div style="text-align: center">
    <nut-button type="info" size="small">批量添加</nut-button>&nbsp;
    <nut-button type="info" size="small">单个添加</nut-button>
  </div>
</template>

<style scoped>
.search {
  width: 90%;
  margin: 8px auto 15px;
  text-align: center;
}
</style>
