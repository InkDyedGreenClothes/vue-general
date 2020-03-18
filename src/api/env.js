/*
 * @Author: Longlong
 * @Date: 2020-03-18 17:15:31
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-18 17:19:21
 * @Descripttion: describe
 */
var baseUrl = ""
if (process.env.NODE_ENV == "development") {
  baseUrl = "/api"
} else if (process.env.NODE_ENV == "production") {
  //baseUrl = "测试地址";
  //baseUrl = "预发布地址";
  baseUrl = window.g.baseUrl
}

export {
  baseUrl //导出baseUrl
}
