import request from '@/utils/request.js'
import { useStaffState } from '@/stores/index.js'

export const uploadsService = (formData, id) => {
  const staffState = useStaffState()
  return request.post(`/common/uploads/${id}`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: staffState.token
    }
  })
}

export const checkPhotoService = () => request.post(`/common/check-dir`)

export const getPhotoListService = (dirName) =>
  request.get(`/common/getPhotoList?dirName=${dirName}`)

export const deletePhotoService = (name) =>
  request.delete(`/common/del?name=${name}`)

export const backupDBService = (s) =>
  request.get('/common/backup-db?status=' + s)
