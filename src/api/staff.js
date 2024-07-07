import request from '@/utils/request.js'

export const staffLoginService = (staff) => request.post('/staff/login', staff)

export const staffLeaderboardService = () => request.get('/staff/leaderboard')

export const changPasswordService = (data) =>
  request.put('/staff/change-password', data)

export const logoutService = () => request.get('/staff/logout')
