import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: true,
  timeout: 1000 * 60,
  timeoutErrorMessage: '请求超时',
  // adapter: cacheAdapter(axios.defaults.adapter),
})

request.interceptors.request.use(
  (config) => {
    NProgress.start()
    return config
  },
  (error) => {
    NProgress.done()
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    NProgress.done()
    return res
  },
  (error) => {
    NProgress.done()
    return Promise.reject(error)
  }
)

export default request
