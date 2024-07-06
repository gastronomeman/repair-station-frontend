import axios from 'axios'
import { useStaffState } from '@/stores'
import { useRouter } from 'vue-router'
import { errorMsg } from '@/utils/SendMsgUtils.js'

const router = useRouter()
const baseURL = 'http://10.19.209.138:8080'

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
      router.push('/staff/login').then(() => alert('登录验证失效请重新登陆'))
      return Promise.reject(res.data.msg)
    }

    if (res.data.code === 0) {
      errorMsg(res.data.msg)
      return Promise.reject(res.data.msg)
    }
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
