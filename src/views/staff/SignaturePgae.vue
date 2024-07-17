<script setup>
import { successMsg } from '@/utils/SendMsgUtils.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useStaffState } from '@/stores/index.js'

const router = useRouter()
const staffState = useStaffState()

const onClick = () => {
  router.push('/staff/accepted-orders')
}
const confirm = () => {
  successMsg('请交给工作人员截图保存')
}
const clear = () => {
  console.log('clear')
}
const order = ref({})
order.value = staffState.order
</script>

<template>
  <nut-navbar title="协议签订" left-show @click-back="onClick">
    <template #left>
      <div>返回</div>
    </template>
  </nut-navbar>
  <div class="agreement-text">
    <h1 style="text-align: center">拆机协议</h1>
    <p>
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**在进行维修服务前，请仔细阅读并同意以下协议内容：
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.请确认设备是否在保修期内。若在保修期内，我们建议不拆机维修，因为可能导致失去保修资格。若执意拆机，我们不承担任何责任。<br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.拆机存在风险，很感谢你选择了我们，我们将尽力操作，但可能出现损坏。若因我们的操作导致损坏，我们承担至多60%的维修费用。。<br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.拆机维修服务虽免费，但我们将认真仔细地进行操作。<br /><br />
      <span>
        **请您在确认同意上述内容，并确认下方信息无误后，签署此协议。
      </span>
      <br />
      <span style="color: #7a7374"> 订单号：{{ order.id }} </span><br />
      <span style="color: #7a7374"> 姓名：{{ order.name }} </span><br />
      <span style="color: #7a7374"> 学号：{{ order.studentId }} </span><br />
      <span style="color: #7a7374"> 报修时间：{{ order.createTime }} </span
      ><br />
      <span style="color: #7a7374"> 报修详情：{{ order.orderDescribe }}</span
      ><br />
    </p>
  </div>
  <nut-signature @confirm="confirm" @clear="clear"></nut-signature>
  <div class="tip">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**请维修人员截图保存
  </div>
</template>

<style scoped>
.agreement-text {
  width: 95%;
  margin: 0 auto;
  h1 {
    margin: 5px;
  }
  p {
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin: 5px;
    span {
      font-size: 13px;
      color: red;
    }
  }
}
.tip {
  font-size: 14px;
  color: red;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
