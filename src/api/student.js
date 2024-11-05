import request from '@/utils/request.js'

export const addStudentService = (data) => request.post('/stu', data)
