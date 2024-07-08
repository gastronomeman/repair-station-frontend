import request from '@/utils/request.js'

export const getServerStatusService = () => request.get('/wxzStatus')

export const getOrderTitleService = () => request.get('/wxzStatus/orderTitle')

export const getStaffTitleService = () => request.get('/wxzStatus/staffTitle')

export const changStatusService = () => request.get('/wxzStatus/chang-status')

export const changeOrderNoService = (str) =>
  request.get('/wxzStatus/chang-order-notice?orderNo=' + str)

export const changeStaffNoService = (str) =>
  request.get('/wxzStatus/chang-staff-notice?staffNo=' + str)
