<script setup>
import { useOrderState } from '@/stores/index.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const orderState = useOrderState()
const checkAgreed = () => {
  if (!orderState.agreed) {
    router.push('/')
  }
}
checkAgreed()
</script>

<template>
  <div class="order-success">
    <h2>报修成功！ ᖰ⌯'▾'⌯ᖳ <br />请等待工作人员短信联系</h2>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;我们是公益服务，不收群众一针一线，
      <span style="color: red"> 如遇讨要钱财，纠纷或需要投诉</span>
      请在下方扫描二维码，在公众号进行留言！<br />
      &nbsp;&nbsp;&nbsp;&nbsp;如遇紧急情况，需要维修电脑可添加维修站QQ咨询群：790445318进行咨询。
    </p>
  </div>
</template>

<style scoped></style>
