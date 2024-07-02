<script setup>
import { Agreement, EditOne, Tool } from '@icon-park/vue-next'
import { ref } from 'vue'
import OrdersNotice from '@/components/orders/OrdersNotice.vue'

const current = ref(1)
const onClickStep = (index) => {
  console.log(index)
}

const handleAgreementStatus = (status) => {
  console.log('User agreement status:', status)
  if (status) {
    current.value = 2
  }
}
</script>

<template>
  <div class="new-order-container">
    <div class="new-order-head">
      <img src="@/assets/orders/images/news_top.png" alt="图标" />
      <div class="new-order-from">
        <nut-steps :current="current" @click-step="onClickStep">
          <nut-step title="服务须知"
            ><template #icon
              ><agreement
                class="step-icon"
                theme="outline"
                size="12" /></template
          ></nut-step>
          <nut-step title="信息填写">
            <template #icon
              ><edit-one class="step-icon" theme="outline" size="12"
            /></template>
          </nut-step>
          <nut-step title="等待修单">
            <template #icon>
              <tool class="step-icon" theme="outline" size="12" />
            </template>
          </nut-step>
        </nut-steps>
        <orders-notice
          v-if="current === 1"
          @agreementStatus="handleAgreementStatus"
        ></orders-notice>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
