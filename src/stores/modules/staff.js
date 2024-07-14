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

    const order = ref({})
    const setOrder = (newValues) => {
      order.value = newValues
    }

    const clear = () => {
      token.value = ''
      name.value = ''
      order.value = ''
    }
    return {
      token,
      setToken,
      name,
      setName,
      order,
      setOrder,
      clear
    }
  },
  {
    persist: true
  }
)
