/*
 * @Author: Longlong
 * @Date: 2020-03-19 16:55:36
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 16:56:16
 * @Descripttion: vant rem 配置
 */
//修改后
module.exports = {
  plugins: {
    "autoprefixerAndroid": {
     browsers: ["Android >= 4.0", "iOS >= 7"]
        },
        "postcss-pxtorem": {
            rootValue: 37.5,
            propList: ["*"]
        }
    }
}

// 最新写法
module.exports = {
    plugins: {
        "autoprefixer": {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ]
        },
        "postcss-pxtorem": {
            rootValue: 37.5,
            propList: ["*"]
        }
    }
}
