import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStaffState = defineStore(
  'repairStaff',
  () => {
    const token = ref('')
    const setToken = (newValues) => {
      token.value = newValues
    }

    const clear = () => {
      token.value = ''
    }
    return {
      token,
      setToken,
      clear
    }
  },
  {
    persist: true
  }
)
