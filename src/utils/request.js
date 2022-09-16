import axios from 'axios'

const service = axios.create({
  baseURL:
    'https://www.fastmock.site/mock/f2db6f99b95290d004e18b055d37f0da/api',
  timeout: 5000
})

// 请求拦截器
// service.interceptors.request.use(
//   (config) => {
//     // config.headers.icode = '你需要在这里填入你的 icode'
//     if (store.getters.token) {
//       // 如果token存在 注入token
//       config.headers.Authorization = `Bearer ${store.getters.token}`
//     }
//     return config // 必须返回配置
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// 响应拦截器
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  //   要根据success的成功与否决定下面的操作
  if (success) {
    return data
  } else {
    // TODO：业务错误
    return Promise.reject(new Error(message))
  }
})

export default service
