<script setup>
/*const props = defineProps({
  order: {
    type: Object,
    required: true
  }
})*/
import { ref } from 'vue'

const order = ref({
  id: '1802875163046363138',
  createTime: '2024-05-30 08:00:00',
  building: '26',
  dormitory: '5036',
  name: '余文锐',
  status: '3',
  describe: '通过插槽可以在分割线中间插入内容通过插槽可以在分割线中'
})

const handleClick = () => {
  alert('成功')
}
</script>

<template>
  <div class="orders-item">
    <div class="orders-row" @click="handleClick">
      <nut-row>
        <nut-col :span="24">
          <div class="content-head">
            {{ order.createTime }}
            &nbsp;/&nbsp; 编号:
            {{ order.id }}
          </div>
        </nut-col>
      </nut-row>
      <nut-row>
        <nut-col :span="24">
          <div class="content-body">
            <span class="body-left">
              {{ order.building }}#{{ order.dormitory }}
              &nbsp;
              {{ order.name }}
            </span>
            <span
              v-if="order.status === '0'"
              class="body-right"
              style="color: #de2a18"
            >
              待接单
            </span>
            <span
              v-else-if="order.status === '1'"
              class="body-right"
              style="color: #fecc11"
              >维修中
            </span>
            <span v-else class="body-right" style="color: #41b349">
              已完成
            </span>
          </div>
        </nut-col>
      </nut-row>
      <nut-divider dashed />
      <p>{{ order.describe }}</p>
    </div>
  </div>
</template>

<style scoped></style>
