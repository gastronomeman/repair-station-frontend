<script setup>
import { Agreement, EditOne, Tool } from '@icon-park/vue-next'
import { ref } from 'vue'
import OrdersNotice from '@/components/orders/OrdersNotice.vue'
import OrdersFrom from '@/components/orders/OrdersFrom.vue'

const current = ref(1)
const onClickStep = (index) => {
  //console.log(index)
  if (index < current.value && index !== 3) {
    current.value = index
  }
  //current.value = index
}

const handleAgreementStatus = (status) => {
  if (status) {
    current.value = 2
  }
}
const handleSuccessStatus = (status) => {
  console.log('User agreement status:', status)
  if (status) {
    current.value = 3
  }
}
</script>

<template>
  <div class="new-order-container">
    <div class="new-order-head">
      <img src="@/assets/orders/images/news_top.png" alt="图标" />
      <div class="new-order-from">
        <nut-steps :current="current" @click-step="onClickStep">
          <nut-step title="服务须知">
            <template #icon>
              <agreement class="step-icon" theme="outline" size="12" />
            </template>
          </nut-step>
          <nut-step title="信息填写">
            <template #icon>
              <edit-one class="step-icon" theme="outline" size="12" />
            </template>
          </nut-step>
          <nut-step title="等待修单">
            <template #icon>
              <tool class="step-icon" theme="outline" size="12" />
            </template>
          </nut-step>
        </nut-steps>
        <orders-notice
          v-show="current === 1"
          @agreementStatus="handleAgreementStatus"
        ></orders-notice>
        <orders-from
          v-show="current === 2"
          @successStatus="handleSuccessStatus"
        ></orders-from>
        <div v-show="current === 3" class="order-success">
          <h2>报修成功！ ᖰ⌯'▾'⌯ᖳ <br />请等待工作人员短信联系</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;我们是公益服务，不收群众一针一线，
            <span style="color: red"> 如遇讨要钱财，纠纷或需要投诉</span>
            请在下方扫描二维码，在公众号进行留言！<br />
            &nbsp;&nbsp;&nbsp;&nbsp;如遇紧急情况，需要维修电脑可添加维修站QQ咨询群：790445318进行咨询。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
