<script setup>
import { ref } from 'vue'

const props = defineProps({
  order: {
    type: Object,
    required: true
  }
})
const order = ref(props.order)
const handleClick = () => {
  alert('成功')
}
const callPhone = () => {
  window.location.href = `tel:${order.value.phone}`
}
const sendSMS = () => {
  window.location.href = `sms:${order.value.phone}`
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
              v-if="order.status === '1'"
              class="body-right"
              style="color: #de2a18"
            >
              待接单
            </span>
            <span
              v-else-if="order.status === '2'"
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
      <p>{{ order.orderDescribe }}</p>
    </div>
    <nut-row>
      <nut-col :span="12" @click="callPhone">
        <div class="orders-row-footer">拨打电话</div>
      </nut-col>
      <nut-col :span="12">
        <div class="orders-row-footer" @click="sendSMS">发送短信</div>
      </nut-col>
    </nut-row>
  </div>
</template>

<style scoped>
.orders-item {
  margin: 0 auto;
  max-width: 800px;
  padding: 10px 0 0;
  background-color: white;

  .orders-row {
    margin: 0 auto;
    max-width: 320px !important;
    cursor: pointer;

    .content-head {
      font-size: 12px;
      color: #a7a8bd;
    }

    .content-body {
      font-size: 16px;
      margin: 5px 0;
      display: flex;
      justify-content: space-between;
      color: #7a7374;
      font-weight: bold;

      .body-left {
        flex: 1;
      }
      .body-right {
        flex-shrink: 0;
      }
    }

    .nut-divider {
      margin: 0;
    }

    p {
      text-align: center;
      word-wrap: break-word;
      overflow-wrap: break-word;
      margin: 2px auto;
      font-size: 18px;
    }
  }
  .orders-row-footer {
    background-color: #74787a;
    color: white;
    font-weight: bold;
    padding: 5px 0;
    margin-top: 5px;
    text-align: center;
  }
}
</style>
