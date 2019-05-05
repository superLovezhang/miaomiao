<template>
  <div class="loginBox">
    <input type="text" placeholder="账户名/手机号/Email">
    <input type="password" placeholder="请输入您的密码">
    <div class="login">
      <a href="javascript:;">登录</a>
    </div>
    <p class="login_down">
      <a href="javascript:;">立即注册</a>
      <a href="javascript:;">忘记密码</a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loginBox {
  width: 100%;
}
input[type="text"],
input[type="password"] {
  border: 0;
  width: 100%;
  outline: none;
  text-indent: 0.9375rem;
  line-height: 2.8125rem;
  font-size: 0.9375rem;
  border-bottom: 0.0625rem solid #ccc;
}
.login {
  margin-top: 0.9375rem;
  padding: 0 0.9375rem;
}
.login a {
  border-radius: .1875rem;
  font-size: 1.1875rem;
  display: block;
  color: white;
  text-decoration: none;
  text-align: center;
  line-height: 3.125rem;
  background-color: #ff4e39;
}
.login_down {
  margin-top: 0.625rem;
  display: flex;
  padding: 0 0.625rem;
  justify-content: space-between;
}
.login_down a {
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 700;
  color: #ff4e39;
}
</style>