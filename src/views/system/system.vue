<!--
 * @Author: Longlong
 * @Date: 2020-03-19 16:18:37
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 16:20:49
 * @Descripttion: describe
 -->
<template>
  <div class="my">
    <NavBar :navBarObj = navBarObj></NavBar>
    <button @click="loginOut">退出</button>
  </div>
</template>

<script>
import NavBar from '../../components/navBar/navbar'
export default {
  data() {
    return {
      navBarObj:{
        show: true,
        name: '退出',
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
      _self.$util.delToken()
      _self.$router.replace('/login')
    }
  }
}
</script>