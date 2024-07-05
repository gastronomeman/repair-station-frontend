import request from '@/utils/request.js'

export const ordersNewService = (data) => request.post('orders', data)

export const getOrderListByStudentIdService = (studentId) =>
  request.get('/orders?name=' + studentId)
