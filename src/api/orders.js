import request from '@/utils/request.js'

export const ordersNewService = (data) => request.post('/orders', data)

export const getOrderListByStudentIdService = (studentId) =>
  request.get('/orders?name=' + studentId)

export const getStaffOrderTotalService = () =>
  request.get('/orders/staff-order-total')

export const getOrdersListService = (type, status) =>
  request.get(`/orders/typeList?type=${type}&status=${status}`)

export const takingOrdersService = (data) => request.put(`/orders/taking`, data)
