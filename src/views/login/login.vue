<!--
 * @Author: Longlong
 * @Date: 2020-03-19 11:15:54
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 14:27:17
 * @Descripttion: describe
 -->
<template>
  <div class="login">
    {{ name }} <br />
    账号:
    <input v-model="account" placeholder="请输入账号" /><br />
    账号:
    <input v-model="password" placeholder="请输入密码" /><br />
    <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'login',
      account: "", // 账号
      password: "" // 密码
    }
  },
  methods: {
    login() {
      let _self = this
      _self.$util.setToken('1')
      _self.$router.replace({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>