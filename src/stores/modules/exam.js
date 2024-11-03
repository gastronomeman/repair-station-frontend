import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExamState = defineStore('exam', () => {
  const agreed = ref(false)
  const setAgreed = (newValue) => {
    agreed.value = newValue
  }

  const result = ref([])
  const setResultLength = (length) => {
    result.value = new Array(length).fill(null)
  }
  const setResult = (index, value) => {
    result.value[index] = value
  }

  const clear = () => {
    agreed.value = false
    result.value = []
  }
  return {
    agreed,
    setAgreed,
    result,
    setResultLength,
    setResult,
    clear
  }
})
