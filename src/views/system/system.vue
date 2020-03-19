<!--
 * @Author: Longlong
 * @Date: 2020-03-19 16:18:37
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 16:20:49
 * @Descripttion: describe
 -->
<template>
  <div class="my">
    <button @click="loginOut">退出</button>
  </div>
</template>

<script>
export default {
  methods: {
    loginOut() {
      let _self = this
      _self.$util.delToken()
      _self.$router.replace('/login')
    }
  }
}
</script>