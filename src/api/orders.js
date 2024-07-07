import request from '@/utils/request.js'

export const ordersNewService = (data) => request.post('/orders', data)

export const getOrderListByStudentIdService = (studentId) =>
  request.get('/orders?name=' + studentId)

export const getStaffOrderTotalService = () =>
  request.get('/orders/staff-order-total')

export const getOrdersListService = (type, status) =>
  request.get(`/orders/type-list?type=${type}&status=${status}`)

export const getOrdersWithNameListService = (type, status) =>
  request.get(`/orders/type-list-with-name?type=${type}&status=${status}`)

export const takingOrdersService = (data) => request.put(`/orders/taking`, data)

export const takingListService = () => request.get(`/orders/taking-list`)

export const finishOrderService = (data) =>
  request.put(`/orders/finish-order`, data)

export const historyListService = () => request.get(`/orders/history-list`)
