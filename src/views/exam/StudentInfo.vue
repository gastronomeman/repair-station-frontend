<script setup>
import icon from '@/assets/logos.png'
</script>

<template>
  <div class="image">
    <van-image width="100%" :src="icon" />
  </div>
</template>

<style scoped>
.image {
  width: 80%;
  max-width: 450px;
  text-align: center;
  margin: 5vh auto;
}
</style>
