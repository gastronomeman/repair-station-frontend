import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStaffState = defineStore(
  'repairStaff',
  () => {
    const token = ref('')
    const setToken = (newValues) => {
      token.value = newValues
    }

    const name = ref('')
    const setName = (newValues) => {
      name.value = newValues
    }

    const clear = () => {
      token.value = ''
      name.value = ''
    }
    return {
      token,
      setToken,
      name,
      setName,
      clear
    }
  },
  {
    persist: true
  }
)
