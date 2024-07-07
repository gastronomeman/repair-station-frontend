import request from '@/utils/request.js'

export const getServerStatusService = () => request.get('/wxzStatus')

export const getOrderTitleService = () => request.get('/wxzStatus/orderTitle')
