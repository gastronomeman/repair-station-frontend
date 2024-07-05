import request from '@/utils/request.js'

export const getServerStatusService = () => request.get('/wxzStatus')
