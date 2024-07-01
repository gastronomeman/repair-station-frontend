import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrdersState = defineStore('repairOrders', () => {
  const pageTitle = ref('')
  const setPageTitle = (title) => {
    pageTitle.value = title
  }

  return {
    pageTitle,
    setPageTitle
  }
})
