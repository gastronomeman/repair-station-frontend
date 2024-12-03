<script setup>
import { ref } from 'vue'
import { finishOrderService, transferOrderService } from '@/api/orders.js'
import { errorMsg, successMsg } from '@/utils/SendMsgUtils.js'
import { useStaffState } from '@/stores/index.js'
import { useRouter } from 'vue-router'
import { confirm3Dialog } from '@/utils/DialogUtils.js'

const staffState = useStaffState()
const router = useRouter()

const emit = defineEmits(['refresh'])
const props = defineProps({
  order: {
    type: Object,
    required: true
  }
})
const order = ref(props.order)
const handleClick = async () => {
  if (
    await confirm3Dialog(
      'ฅ( ̳• ◡ • ̳)ฅ',
      '是否要结束修单？<br /><span style="font-weight: bold;color: #fbb612">（提示：有没有照片需要上传呢？）</span>'
    )
  ) {
    const resp = await finishOrderService(order.value)
    if (resp.code === 1) {
      successMsg(resp.data)
      emit('refresh')
    }
  }
}
const callPhone = () => {
  window.location.href = `tel:${order.value.phone}`
}
const sendSMS = () => {
  window.location.href = `sms:${order.value.phone}`
}
const signature = () => {
  staffState.setOrder(order.value)
  router.push('/signature')
}

const transferOrder = async () => {
  if (order.value.assignor !== null) {
    errorMsg('此订单为转单，不可再次转出！')
    return
  }
  await showConfirmDialog({
    title: 'ฅ( ̳• ◡ • ̳)ฅ',
    message: '是否确认转出订单？'
  })
    .then(async () => {
      const resp = await transferOrderService(order.value.id)
      if (resp.code === 1) {
        successMsg(resp.data)
        emit('refresh')
      }
    })
    .catch(() => {
      // on cancel
    })
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
            <span
              class="body-left"
              v-if="order.identity === 0"
              style="color: #f1939c"
            >
              {{ order.building }}#{{ order.dormitory }}
              &nbsp;
              {{ order.name }}
            </span>
            <span class="body-left" v-else style="color: #5698c3">
              {{ order.building }}#{{ order.dormitory }}
              &nbsp;
              {{ order.name }}
            </span>
            <span
              v-if="order.status === 2"
              class="body-right"
              style="color: #e8b004"
              >维修中
            </span>
          </div>
        </nut-col>
      </nut-row>
      <nut-divider dashed />
      <p>{{ order.orderDescribe }}</p>
    </div>
    <nut-row>
      <nut-col :span="12" @click="signature">
        <div class="orders-row-footer1 lt">协议签订（拆机用）</div>
      </nut-col>
      <nut-col :span="12" @click="transferOrder"
        ><div class="orders-row-footer1 rt">转单</div>
      </nut-col>
    </nut-row>
    <nut-row>
      <nut-col :span="12" @click="callPhone">
        <div class="orders-row-footer2 lb">拨打电话</div>
      </nut-col>
      <nut-col :span="12" @click="sendSMS">
        <div class="orders-row-footer2 rb">发送短信</div>
      </nut-col>
    </nut-row>
  </div>
</template>

<style scoped>
.orders-item {
  width: 98%;
  margin: 12px auto;
  max-width: 800px;
  padding: 10px 0 0;
  background-color: #fffef9;
  border-radius: 10px;

  .orders-row {
    margin: 0 auto;
    width: 90%;
    cursor: pointer;

    .content-head {
      margin: 1px 0 0;
      font-size: 12px;
      color: #a7a8bd;
    }

    .content-body {
      font-size: 18px;
      margin: 8px 0;
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
      margin: 5px auto;
      font-size: 18px;
    }
  }

  .orders-row-footer1 {
    background-color: #74787a;
    color: white;
    font-weight: bold;
    padding: 10px 0;
    margin: 5px 1px 0;
    text-align: center;
    cursor: pointer;
  }
  .lt {
    border-top-left-radius: 10px;
  }
  .rt {
    border-top-right-radius: 10px;
  }

  .orders-row-footer2 {
    background-color: #5e616d;
    color: white;
    font-weight: bold;
    padding: 10px 0;
    margin: 2px 1px;
    text-align: center;
    cursor: pointer;
  }
  .lb {
    border-bottom-left-radius: 10px;
  }
  .rb {
    border-bottom-right-radius: 10px;
  }
}
</style>
