import axios from 'axios'
import { useStaffState } from '@/stores'
import router from '@/router'

const baseURL = 'http://localhost:8080'

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
    // 3. 处理业务失败
    if (res.data.code === 0 && res.data.msg === 'NOT_LOGIN') {
      router.push('/authentication')
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
