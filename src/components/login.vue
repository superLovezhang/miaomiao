<template>
  <div class="loginBox">
    <input type="text" placeholder="账户名/手机号/Email" v-model="lo_user">
    <input type="password" placeholder="请输入您的密码" v-model="lo_passward">
    <div class="login">
      <a href="javascript:;"  @click="handleToLogin">登录</a>
    </div>
    <p class="login_down">
      <router-link tag="a" to="mine/register">立即注册</router-link>
      <!-- <a href="javascript:;">忘记密码</a> -->
      <router-link tag="a" to="/mine/forget">忘记密码</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lo_user:'',
      lo_passward:'',
      
    }
  },
  methods:{
    handleToLogin(){
      var lo_To = JSON.parse(window.localStorage.getItem('userDate')) || [];
      if(this.lo_user && this.lo_passward){
         if(isHasUser(this)){
            if(isHasPassward(this)){
               alert('登陆成功！')
               this.$router.push('/admin')
            }else{
              alert('密码错误')
            }
         }else{
           alert('该账号未注册，请前往注册！')
         }
      }else{
        alert("账号或密码不能为空！")
      }
      function isHasUser(a){
        for(var i=0; i<lo_To.length; i++){
           if(lo_To[i].userName === a.lo_user){
              return true;
           }
         }
         return false;
       }
       function isHasPassward(a){
        for(var i=0; i<lo_To.length; i++){
           if(lo_To[i].userName === a.lo_user){
              if(lo_To[i].userPassward === a.lo_passward){
                return true;
              }
           }else{}
         }
         return false;
       }
    }
  }
};
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