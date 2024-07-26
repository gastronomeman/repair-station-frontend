<script setup>
import OrdersFooter from '@/components/orders/OrdersFooter.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <h1>404 Not Found</h1>
  <h1>找不到网页</h1>
  <div>
    <img src="@/assets/rs_logo.png" alt="" />
    <nut-button @click="router.push('/')" size="large" type="danger">
      点击跳转到报修页面
    </nut-button>
  </div>
  <orders-footer></orders-footer>
</template>

<style scoped>
div {
  width: 50%;
  margin: 50px auto 20px;
  text-align: center;
  img {
    width: 100%;
    margin: 0 auto;
  }
  .nut-button--round {
    margin-top: 35px;
  }
}
h1 {
  text-align: center;
  font-size: 50px;
}
</style>
