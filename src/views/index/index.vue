<!--
 * @Author: Longlong
 * @Date: 2020-03-19 11:20:25
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 17:00:31
 * @Descripttion: describe
 -->
<template>
  <div class="index">
    <NavBar :navBarObj = navBarObj></NavBar>
    {{ name }}
    <button @click="loginOut">设置</button>
    <!-- 开启 safe-area-inset-bottom 属性 -->
    <!-- <van-number-keyboard safe-area-inset-bottom /> -->
  </div>
</template>

<script>
import NavBar from "../../components/navBar/navbar"
export default {
  data() {
    return {
      name: 'index',
      navBarObj:{
        show: false,
        name: '首页',
        leftText: '返回',
        rightText: '按钮'
      }
    }
  },
  components: {
    NavBar
  },
  mounted () {
    let _self = this
    _self.navBarObj.onClickLeft = function () {
      _self.$router.go(-1)
    }
  
    _self.navBarObj.onClickRight = function () {
      _self.$util.Log(13)
    }
    // _self.$util.Log(_self.$util.getToken())
  },
  methods: {
    loginOut() {
      let _self = this
      _self.$router.push("/system");
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
