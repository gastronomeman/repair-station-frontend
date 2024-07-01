<script setup>
import { Agreement, EditOne, Tool } from '@icon-park/vue-next'
import { ref } from 'vue'

const current = ref(1)
const onClickStep = (index) => {
  console.log(index)

  current.value = index
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
        <div class="service-notice">
          <h2>服务须知</h2>
          <p class="notice">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、本服务仅提供广东农工商职业技术学院北校区师生。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、正常情况下我们会根据报修的时间顺序进行处理，请耐心等候工作人员跟进，如有其他情况请在公众号留言。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、如需【取消报修】，请在ITeam维修站公众号留言“宿舍号+姓名”。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、我们“ITeam基地-维修站”的所有成员，是本校计算机系各专业的同学们，本着一颗服务同学们的心，在实践中提升自己的专业技能，从不收取一分钱。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五、我们不销售任何电子产品，如需要可给予购买意见。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;六、在使用本服务之前，表示你已同意承担在处理过程中可能存在的风险。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;七、如有任何纠纷投诉请与本公众号取得联系。<br />
          </p>
          <div class="read-service">
            <input type="checkbox" />
            已阅读，并同意此协议
          </div>
          <nut-button size="small" shape="round" type="info"
            >同意须知</nut-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
