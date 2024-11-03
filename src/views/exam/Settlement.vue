<script setup>
import { useExamState } from '@/stores/index.js'
import { computed } from 'vue'

const examState = useExamState()

const right = computed(() => {
  let i = 0
  examState.result.forEach((item) => {
    if (item === true) i++
  })

  return i
})
</script>

<template>
  <div class="result">恭喜你答对了{{ right }}题</div>
</template>

<style scoped>
.result {
  text-align: center;
  width: 80%;
  margin: 20px auto;
}
</style>
