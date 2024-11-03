import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExamState = defineStore('exam', () => {
  const agreed = ref(false)
  const setAgreed = (newValue) => {
    agreed.value = newValue
  }

  const result = ref([])
  const setResult = (index, value) => {
    if (result.value.length < index + 1) {
      result.value.push(value)
    } else {
      result.value[index] = value
    }
  }

  const clear = () => {
    agreed.value = false
    result.value = []
  }
  return {
    agreed,
    setAgreed,
    result,
    setResult,
    clear
  }
})
