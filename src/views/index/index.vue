<!--
 * @Author: Longlong
 * @Date: 2020-03-19 11:20:25
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 17:00:31
 * @Descripttion: describe
 -->
<template>
  <div class="index">
    {{ name }}
    <button @click="loginOut">设置</button>
    <!-- 开启 safe-area-inset-bottom 属性 -->
    <van-number-keyboard safe-area-inset-bottom />
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
    // _self.$util.Log(_self.$util.getToken())
  },
  methods: {
    loginOut() {
      let _self = this
      _self.$router.replace("/system");
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
