<!--
 * @Author: Longlong
 * @Date: 2020-03-19 11:20:25
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 14:24:33
 * @Descripttion: describe
 -->
<template>
  <div class="index">
    {{ name }}
    <button @click="loginOut">退出</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'index'
    }
  },
  mounted () {
    let _self = this
    _self.$util.Log(_self.$util.getToken())
    if (!_self.$util.getToken()) {
      _self.$router.replace({
        path: '/login'
      })
    }
  },
  methods: {
    loginOut() {
      let _self = this
      _self.$util.delToken()
      _self.$router.replace('/login')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
