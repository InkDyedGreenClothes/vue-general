/*
 * @Author: Longlong
 * @Date: 2020-03-17 15:23:10
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 14:29:57
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
   * @description: 设置token
   * @method: setToken
   * @for: util
   * @param {token}
   */
  setToken (token) {
    localStorage.setItem(window.g.token, token)
  },
  /**
   * @name: Longlong
   * @description: 获取用户token
   * @method: getToken
   * @for: util
   * @return: {cachedToken}
   */
  getToken () {
    if (cachedToken) {
      return cachedToken
    }
    return localStorage.getItem(window.g.token)
  },
  /**
   * @name: Longlong
   * @description: 删除token
   * @method: setToken
   * @for: util
   */
  delToken () {
    localStorage.removeItem(window.g.token)
  },
  /**
   * @name: Longlong
   * @description: 清除所有缓存
   * @method: delStorageAll
   * @for: util
   * @param {name}
   * @return: {token}
   */
  delStorageAll () {
    localStorage.clear();  //  删除全部数据                 
  },
  /**
 * @name: Longlong
 * @description: 设置 cookie
 * @method: setCookie
 * @for: util
 * @param {name：cookie 名册, value: cookie 值, day: cookie 过期时间(默认365天)} {参数类型} 参数名 参数说明
 */
  setCookie (name, value, day) {
    var Days = day || 365 //天数设置
    var exp = new Date()
    exp.setTime(exp.getTime() +Days *24 * 60 * 60 * 1000)
    document.cookie = name + "=" + escape(value) + ";expires=" +exp.toDateString()
    // document.cookie = name + "="+ escape (value) + ";domain=(这里可以放入指定使用的域名);expires=" + exp.toGMTString();
  },
  /**
 * @name: Longlong
 * @description: 获取token
 * @method: getCookie
 * @for: util
 * @param {name: 需要获取的 cookie 名称} {参数类型} 参数名 参数说明
 */
  getCookie (name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },
  /**
 * @name: Longlong
 * @description: 删除cookie
 * @method: delCookie
 * @for: util
 * @param {name: 需要获取的 cookie 名称} {参数类型} 参数名 参数说明
 */
  delCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.getCookie(name);
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
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
