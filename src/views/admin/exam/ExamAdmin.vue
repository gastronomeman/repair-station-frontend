<script setup>
import { ref } from 'vue'

const subStatus = ref({
  notice: '',
  number: '',
  isOpen: false
})
</script>

<template>
  <nut-navbar title="维修站答题系统"></nut-navbar>

  <el-form class="content" label-width="auto">
    <el-form-item label="活动规则：">
      <el-input
        :maxlength="50"
        show-word-limit
        v-model="subStatus.notice"
        style="width: 180px"
        :rows="4"
        type="textarea"
        placeholder="谨慎发言"
      />
    </el-form-item>
    <el-form-item label="答题数量：">
      <el-input
        v-model="subStatus.notice"
        style="width: 180px"
        placeholder="谨慎发言"
      />
    </el-form-item>
    <el-form-item label="开启答题：">
      <nut-switch v-model="subStatus.isOpen" />
    </el-form-item>
    <div class="setting-button">
      <nut-button type="info" size="small">更新公告</nut-button>
    </div>
  </el-form>
</template>

<style scoped>
.content {
  width: 300px;
  margin: 20px auto;
  text-align: center;
  .setting-button {
    margin: 10px auto;
  }
}
</style>
