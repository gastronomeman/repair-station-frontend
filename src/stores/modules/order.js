import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderState = defineStore('repairOrder', () => {
  const agreed = ref(false)
  const setAgreed = (newValue) => {
    agreed.value = newValue
  }
  const orderTitle = ref('')
  const setOrderTitle = (newValues) => {
    orderTitle.value = newValues
  }
  const clear = () => {
    agreed.value = false
  }
  return {
    agreed,
    setAgreed,
    orderTitle,
    setOrderTitle,
    clear
  }
})
