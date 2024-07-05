<script setup>
import { ref, defineEmits } from 'vue'

const isAgreed = ref(false)
const emit = defineEmits(['agreementStatus'])

const handleAgree = () => {
  if (isAgreed.value) {
    emit('agreementStatus', true)
  } else {
    alert('请先认真阅读，服务须知')
  }
}
</script>

<template>
  <div class="orders-notice">
    <h2>服务须知</h2>
    <p class="notice">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、本服务仅提供广东农工商职业技术学院北校区师生。<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、在使用本服务之前，表示你已同意承担在处理过程中可能存在的一定风险。<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、我们“ITeam基地-维修站”的所有成员，本着一颗服务同学们的心，在实践中提升自己的专业技能，公益服务从不收取一分钱。<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、正常情况下我们会根据报修的时间顺序进行处理，请耐心等候工作人员与您联系。（我们不会以任何方式添加您的微信）<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五、我们不销售任何电子产品，不提任何供购买意见。<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;六、如有任何纠纷投诉请与本公众号取得联系。<br />
    </p>
    <div class="read-service">
      <label>
        <input type="checkbox" v-model="isAgreed" />
        已阅读，并了解其风险
      </label>
    </div>
    <nut-button size="small" shape="round" type="info" @click="handleAgree"
      >同意须知
    </nut-button>
  </div>
</template>

<style scoped>
.orders-notice {
  text-align: center;

  .notice {
    width: 90%;
    text-align: left;
    padding-bottom: 30px;
    margin: 0 auto;
  }

  .read-service label {
    cursor: pointer;
  }

  .nut-button {
    margin: 20px 0;
  }
}
</style>
