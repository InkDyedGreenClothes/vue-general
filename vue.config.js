/*
 * @Author: Longlong
 * @Date: 2020-03-18 14:56:39
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-18 17:14:19
 * @Descripttion: vue配置
 */
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: "./",
  outputDir: "dist", // build 打包后的目录
  devServer: {
    // host: "localhost", //要设置当前访问的ip 否则失效
    // open: true, //浏览器自动打开页面
    proxy: {
      "/api": {
        target: "http://47.111.175.231:9104",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};

