/*
 * @Author: Longlong
 * @Date: 2020-03-18 13:59:13
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 14:41:33
 * @Descripttion: describe
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-trailing-spaces": 1,//一行结束后面不要有空格
    // "semi": [2, "always"],//语句强制分号结尾
    // "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
    // "no-underscore-dangle": 1,//标识符不能以_开头或结尾
    // "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    // "comma-spacing": 0,//逗号前后的空格
    // "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
    // "space-after-keywords": [0, "always"],//关键字后面是否要空一格
    // "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    // "spaced-comment": 0,//注释风格要不要有空格什么的
  }
}
