/*
 * @Author: Longlong
 * @Date: 2020-03-18 13:59:13
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 17:31:33
 * @Descripttion: main
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import util from '@/utils/util'
import { post, fetch } from '@/api/axios'

import { Button, Toast } from 'vant'
Vue.use(Button)
  .use(Toast)

Vue.config.productionTip = false
Vue.prototype.$util = util
Vue.prototype.$get = fetch
Vue.prototype.$post = post

const whiteList = ['/login'] // 白名单页面
// 路由拦截
router.beforeEach((to, from, next) => {
  // 是否已经登陆
  if (util.getToken()) {
    if (from.path === '/system') {
      next()
    } else if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    // 在免登录白名单，直接进入
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      console.log(123)
      next('/login') // 否则全部重定向到登录页
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
