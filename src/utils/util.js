/*
 * @Author: Longlong
 * @Date: 2020-03-17 15:23:10
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-18 14:54:35
 * @Descripttion: 通用方法
 */
var cachedToken = '' // 定义全局token
// var loda = null
const util = {
  /**
   * @name: Longlong
   * @description: 封装console.log
   * @method: Log
   * @param {需要打印信息}
   */
  Log (text) {
    window.console.log(text)
  },
  /**
   * @name: Longlong
   * @description: 获取用户token
   * @method: getToken
   * @for: util
   * @param {type}
   * @return: {cachedToken}
   */
  getToken () {
    if (cachedToken) {
      return cachedToken
    }
    return localStorage.getItem('token')
  },
  /**
   * @name: Longlong
   * @description: 设置token
   * @method: setToken
   * @for: util
   * @param {token}
   * @return: {token}
   */
  setToken (token) {
    cachedToken = token
    localStorage.setItem('token', token)
  },
  /**
   * @name: Longlong
   * @description: 手机验证正则
   * @method: isPhone
   * @for: util
   * @param {phone:手机号码}
   * @return: {true or false}
   */
  isPhone (phone) {
    return (/^1[3456789]\d{9}$/.test(phone))
  },
  /**
   * @name: Longlong
   * @description: 日期格式化
   * @method formatterDate
   * @for util
   * @param {date: 时间字符串或者时间戳，type: 字符串(需要返回的时间类型)}
   * @param {type: minute(年月日时分),second(年月日时分秒),month(年月),monthToMinute(月日时分),dateTime(年月日),time(时分秒)}
   * @return {2020-03-17}
   */
  formatterDate (date, type) {
    if (!date) {
      date = new Date()
    }
    if (typeof date === 'string') {
      date = new Date(date)
    }
    var y = date.getFullYear() // 年
    var M = date.getMonth() + 1 // 月份
    var d = date.getDate() // 日
    var h = date.getHours() // 小时
    var m = date.getMinutes() // 分
    var s = date.getSeconds() // 秒
    M = M < 10 ? '0' + M : M
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
    switch (type) {
      case 'minute':
        return `${y}-${M}-${d} ${h}:${m}`
      case 'second':
        return `${y}-${M}-${d} ${h}:${m}:${s}`
      case 'month':
        return `${y}-${M}`
      case 'monthToMinute':
        return `${m}-${d} ${h}:${m}`
      case 'dateTime':
        return `${y}-${M}-${d}`
      default:
        return `${h}:${m}:${s}`
    }
  }
}

export default util
