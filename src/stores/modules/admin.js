import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAdminState = defineStore(
  'repairAdmin',
  () => {
    const startTime = ref('')
    const setStartTime = (newValue) => {
      startTime.value = newValue
    }

    const endTime = ref('')
    const setEndTime = (newValue) => {
      endTime.value = newValue
    }

    const clear = () => {
      startTime.value = ''
    }
    return {
      startTime,
      setStartTime,
      endTime,
      setEndTime,
      clear
    }
  },
  {
    persist: true
  }
)
