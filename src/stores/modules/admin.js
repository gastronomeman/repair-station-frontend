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

    const tabs = ref('1')
    const setTabs = (newValue) => {
      tabs.value = newValue
    }

    const clear = () => {
      startTime.value = ''
      endTime.value = ''
      tabs.value = ''
    }
    return {
      startTime,
      setStartTime,
      endTime,
      setEndTime,
      tabs,
      setTabs,
      clear
    }
  },
  {
    persist: true
  }
)
