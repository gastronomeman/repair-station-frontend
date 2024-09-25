import request from '@/utils/request.js'

export const uploadsService = (formData, id) =>
  request.post(`/common/uploads/${id}`, formData, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
