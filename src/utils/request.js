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
  timeout: 10000,
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
    // 4. 摘取核心响应数据
    if (res.data.code === 1) {
      return res.data
    }
    //3. 处理业务失败
    if (res.data.code === 0 && res.data.msg === 'not_login') {
      //如果已经登录就不会再次发起提示请求
      if (router.currentRoute.value.path.includes('/staff/login')) return

      alert('登录验证失效请重新登陆')
      const staffState = useStaffState()
      staffState.clear()

      router.push('/staff/login')
      return Promise.reject(res.data.msg)
    }

    if (res.data.code === 0 && res.data.msg !== '停止接单') {
      errorMsg(res.data.msg)
    }
    return res.data
  },
  (err) => {
    if (err.response?.status === 401) {
      /* empty */
    }

    // 5. 处理401错误
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
