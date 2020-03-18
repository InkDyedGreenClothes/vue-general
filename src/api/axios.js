/*
 * @Author: Longlong
 * @Date: 2020-03-17 15:19:04
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-18 17:31:23
 * @Descripttion: 接口请求配置
 */
import axios from 'axios'
import util from '@/utils/util'
import router from '@/router'

// 设置默认接口地址
if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "/api" //设置默认接口地址
} else if (process.env.NODE_ENV == "production") {
  //baseUrl = "测试地址";
  //baseUrl = "预发布地址";
  axios.defaults.baseURL = window.g.baseUrl //设置默认接口地址
}

axios.defaults.timeout = window.g.axiosTimeout // 设置请求时间
// axios.defaults.baseURL = baseUrl //设置默认接口地址
axios.defaults.headers.post['Content-Type'] = window.g.axiosHeader // 设置请求头
console.log(window.g)
console.log(axios.defaults)
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (util.getToken()) {
      config.headers.token = util.getToken()
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    // 拦截响应做统一处理
    switch (response.data.code) {
      case '000':
        router.replace({
          path: '/login'
        })
    }
    return response
  },
  // 接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response.message) // 返回接口的错误信息
  }
)
/**
 * @name: Longlong
 * @description: 封装get方法
 * @method: fetch
 * @param {url:请求地址, params: 需要传入的参数(默认为空)}
 */
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * @name: Longlong
 * @description: 封装post请求
 * @method: post
 * @param {url:请求地址, data: 需要传入的参数(默认为空)}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
