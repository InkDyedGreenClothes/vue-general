/*
 * @Author: Longlong
 * @Date: 2020-03-18 13:59:13
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-18 17:03:42
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
