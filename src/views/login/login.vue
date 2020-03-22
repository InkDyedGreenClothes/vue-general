<!--
 * @Author: Longlong
 * @Date: 2020-03-19 11:15:54
 * @LastEditors: Longlong
 * @LastEditTime: 2020-03-19 17:05:55
 * @Descripttion: describe
 -->
<template>
  <div class="login">
    <div class="form">
      <h1>{{ title }}</h1>
      <van-form @submit="login">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          name="password"
          type="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登陆</van-button>
        </div>
      </van-form>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "login",
      title: "欢迎登陆",
      isSignup: false, // 显示注册 or 登陆
      username: "", // 账号
      password: "" // 密码
    };
  },
  mounted() {
    this.$util.delToken();
    // this.$util.Toast(123)
  },
  methods: {
    login(values) {
      let _self = this;
      _self.$util.Log(values)
      _self.$util.setToken("1");
      _self.$router.replace("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background: url("../../assets/login/index-bg.png") no-repeat;
  background-size: cover;
}
.form {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 60%;
  width: 100%;
  background: #fff;
  border-radius: 15px 15px 0 0;
}
h1 {
  text-align: center;
}
</style>