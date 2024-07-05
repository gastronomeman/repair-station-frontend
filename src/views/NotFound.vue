<script setup>
import OrdersFooter from '@/components/orders/OrdersFooter.vue'
</script>

<template>
  <h1>404 Not Found</h1>
  <h1>找不到网页</h1>
  <div>
    <img src="@/assets/rs_logo.png" alt="" />
  </div>
  <orders-footer></orders-footer>
</template>

<style scoped>
div {
  width: 50%;
  margin: 100px auto;
  img {
    width: 100%;
    margin: 0 auto;
  }
}
h1 {
  text-align: center;
  font-size: 50px;
}
</style>
