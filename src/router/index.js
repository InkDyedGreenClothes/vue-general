/*
 * @Author: Longlong
 * @Date: 2020-03-18 13:59:13
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 16:18:52
 * @Descripttion: describe
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Index from '../views/index/index.vue'
import System from '../views/system/system.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/system',
    name: 'System',
    component: System
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
