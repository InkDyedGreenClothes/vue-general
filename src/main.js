/*
 * @Author: Longlong
 * @Date: 2020-03-18 13:59:13
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 14:29:42
 * @Descripttion: main
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import util from '@/utils/util'
import { post, fetch } from '@/api/axios'

Vue.config.productionTip = false
Vue.prototype.$util = util
Vue.prototype.$get = fetch
Vue.prototype.$post = post

// /**
//  * @name: Longlong
//  * @description: 设置 cookie
//  * @method: setCookie
//  * @for: Vue.prototype (this)
//  * @param {name：cookie 名册, value: cookie 值, day: cookie 过期时间(默认365天)} {参数类型} 参数名 参数说明
//  */
// Vue.prototype.setCookie = function (name, value, day) {
//   var Days = day || 365 //天数设置
//   var exp = new Date()
//   exp.setTime(exp.getTime() +Days *24 * 60 * 60 * 1000)
//   document.cookie = name + "=" + escape(value) + ";expires=" +exp.toDateString()
//   // document.cookie = name + "="+ escape (value) + ";domain=(这里可以放入指定使用的域名);expires=" + exp.toGMTString();
// }
// /**
//  * @name: Longlong
//  * @description: 获取token
//  * @method: getCookie
//  * @for: Vue.prototype (this)
//  * @param {name: 需要获取的 cookie 名称} {参数类型} 参数名 参数说明
//  */
// Vue.prototype.getCookie = function (name) {
//   var arr,
//       reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
//   if ((arr = document.cookie.match(reg))) {
//     return unescape(arr[2]);
//   } else {
//     return null;
//   }
// }
// /**
//  * @name: Longlong
//  * @description: 删除cookie
//  * @method: delCookie
//  * @for: Vue.prototype (this)
//  * @param {name: 需要获取的 cookie 名称} {参数类型} 参数名 参数说明
//  */
// Vue.prototype.delCookie = function (name) {
//   var exp = new Date();
//   exp.setTime(exp.getTime() - 1);
//   var cval = this.getCookie(name);
//   if (cval != null) {
//     document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
//   }
// }
// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.matched[0].meta.requireAuth) {
    // 判断是否登陆
    if (Vue.prototype.$util.getItem(window.g.token)) {
      next()
    } else {
      next({
        name: "login"
      })
    }
  } else {
    // 不需要登陆
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
