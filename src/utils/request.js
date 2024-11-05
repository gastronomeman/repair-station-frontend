import axios from 'axios'
import { useStaffState } from '@/stores'
import router from '@/router'
import { errorMsg } from '@/utils/SendMsgUtils.js'
import { dialog, htmlDialog } from '@/utils/DialogUtils.js'

// 这里配置 baseUrl
const baseURL = window.config.baseUrl

const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL,
  timeout: 50000,
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 2. 携带 token
    const staffState = useStaffState()
    if (staffState.token) {
      config.headers.Authorization = staffState.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  async (res) => {
    // 3. 摘取核心响应数据
    if (res.data.code === 1) return res.data

    // 4. 处理业务失败
    const staffState = useStaffState()

    // 处理登录失效
    if (res.data.msg === 'not_login') {
      let hasShownAlert = sessionStorage.getItem('hasShownAlert') === 'true'

      if (!hasShownAlert) {
        // 只有在未弹出过的情况下才弹出提示
        await dialog('登录验证失效，请重新登录')
        // 设置标志位为已弹出并存入 sessionStorage
        sessionStorage.setItem('hasShownAlert', 'true')
      }

      staffState.clear()
      router.push('/staff/login').then(() => {
        // 跳转后清除标志位
        sessionStorage.removeItem('hasShownAlert')
      })
      return Promise.reject(res.data.msg)
    }

    // 处理设备已登录的提示
    if (res.data.msg.startsWith('检测到账号已在别的设备登录')) {
      let hasShownAlert = sessionStorage.getItem('hasShownAlert') === 'true'

      if (!hasShownAlert) {
        await htmlDialog(`<strong>${res.data.msg}</strong>`)

        // 设置标志位为已弹出并存入 sessionStorage
        sessionStorage.setItem('hasShownAlert', 'true')
      }

      staffState.clear()
      router.push('/staff/login').then(() => {
        // 跳转后清除标志位
        sessionStorage.removeItem('hasShownAlert')
      })
    }

    // 其他业务错误处理
    if (res.data.code === 0) errorMsg(res.data.msg)

    return res.data
  },
  (err) => {
    console.log(err)
    errorMsg('网站发生异常，请稍后尝试！<br/>╥﹏╥')
  }
)

export default instance
export { baseURL }
