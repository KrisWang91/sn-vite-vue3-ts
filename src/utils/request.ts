import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios'
import router from '../router'

const PATH_URL = ''

const request: AxiosInstance = axios.create({
  baseURL: PATH_URL,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
})
request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = token

  return config
})

// 添加响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // 未登录
    if (response.status == 401) {
      router.push('/login')
    } else {
      return response.data
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default request
