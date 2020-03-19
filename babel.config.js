/*
 * @Author: Longlong
 * @Date: 2020-03-18 13:59:13
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 16:56:01
 * @Descripttion: vant 自动按需引入
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ["import", {
      libraryName: "vant",
      libraryDirectory: "es",
      style: true
    }, "vant"]
  ]
};
