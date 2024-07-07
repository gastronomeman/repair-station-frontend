import request from '@/utils/request.js'

export const staffLoginService = (staff) => request.post('/staff/login', staff)

export const staffLeaderboardService = () => request.get('/staff/leaderboard')
