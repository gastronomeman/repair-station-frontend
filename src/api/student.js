import request from '@/utils/request.js'

export const addStudentService = (data) => request.post('/stu', data)

export const checkCodeService = (data) => request.post('/stu/check-code', data)

export const getPageService = (page, pageSize, name) =>
  request.get(`/stu/page?page=${page}&pageSize=${pageSize}&name=${name}`)
