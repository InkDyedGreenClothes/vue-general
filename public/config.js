/*
 * @Author: Longlong
 * @Date: 2020-03-18 16:59:57
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 13:30:14
 * @Descripttion: 接口配置地址
 */
window.g = {
  "token": "tzToken", // 用户token 名称
  "axios": {
    "baseUrl": "http://47.111.175.231:9104",  // 配置服务器地址
    "timeout": 10000,  // axios请求时间
    "header": "application/json"  //  axios Content-Type
  },
  "error": {
    "loginOut": "000" // 需要退出
  }
}
