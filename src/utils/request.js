import axios from 'axios'
import { useStaffState } from '@/stores'
import router from '@/router'
import { errorMsg } from '@/utils/SendMsgUtils.js'

//103.40.13.71:40991
//const baseURL = 'http://127.0.0.1:8099'
const baseURL = window.config.baseUrl

const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL,
  timeout: 50000,
  withCredentials: true
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 2. 携带token
    const staffState = useStaffState()
    if (staffState.token) {
      config.headers.Authorization = staffState.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 仅处理非下载请求
    if (res.headers['content-type'] === 'application/octet-stream') {
      return res // 直接返回 Blob 响应
    }

    // 3. 摘取核心响应数据
    if (res.data.code === 1) return res.data

    // 4. 处理业务失败
    const staffState = useStaffState()

    if (res.data.msg === 'not_login') {
      alert('登录验证失效请重新登陆')

      staffState.clear()

      router.push('/staff/login')
      return Promise.reject(res.data.msg)
    }

    if (res.data.msg.startsWith('检测到账号已在别的设备登录')) {
      showDialog({
        allowHtml: true,
        message: `<strong>${res.data.msg}</strong>`,
        theme: 'round-button'
      })
      staffState.clear()
      router.push('/staff/login')
    }

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
