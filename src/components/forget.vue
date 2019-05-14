<template>
  <div class="forgetBox">
    <goBack></goBack>
    <div class="steps">
      <el-steps :active="active" finish-status="success">
        <el-step title="输入账号"></el-step>
        <el-step title="输入新密码"></el-step>
        <el-step title="输入"></el-step>
      </el-steps>
    </div>
    <el-input placeholder="请输入账号" v-model="for_user" v-if="active===0" clearable class="input1"></el-input>
    <el-input
      placeholder="请输入密码"
      v-model="for_passward"
      v-else-if="active===1"
      clearable
      class="input1"
      key="1"
    ></el-input>
    <el-input placeholder="请再次输入" v-model="for_passwards" v-else clearable class="input1" key="2"></el-input>
    <el-button style="margin-top: 12px;" @click="next" class="nextStep">下一步</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      for_user: "",
      for_passward: "",
      for_passwards: ""
    };
  },
  methods: {
    next() {
      window.localStorage.setItem('forUser',this.for_user);
      window.localStorage.setItem('forPassward',this.for_passward);
      window.localStorage.setItem('forPasswards',this.for_passwards);
      var for_users = window.localStorage.getItem('forUser',this.for_user);
      var for_passward = window.localStorage.getItem('forPassward',this.for_passward);
      var for_passwards = window.localStorage.getItem('forPasswards',this.for_passwards);
      var userDate = JSON.parse(window.localStorage.getItem('userDate')) || [];
      if(this.active < 3){
        this.active += 1;
      }else if(this.active === 3){
        if(hasUser()){
           if(for_passward === for_passwards){
             alert('修改成功！');
             changePassward();
           }else{
             alert('两次密码不一致！')
             this.active = 1;
           }
        }else{
          alert('该账号未被注册！')
          this.active = 0
        }
      }
      function hasUser(){
         for(var i=0; i<userDate.length; i++){
            if(userDate[i].userName === for_users){
              return true;
            }
         }
         return false;
      }
      function changePassward(){
        for(var i=0; i<userDate.length; i++){
           if(userDate[i].userName === for_users){
              userDate[i].userPassward = for_passward;
              window.localStorage.setItem('userDate',JSON.stringify(userDate));
           }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.forgetBox {
  top: 0;
  position: absolute;
  width: 100%;
  min-height: 50%;
  z-index: 50;
  background-color: white;
  animation: slideBacks 0.2s;
  padding-top: 4rem;
}
.steps {
  margin-bottom: 3rem;
}
.input1 {
  width: 75%;
  margin-left: 3.125rem;
  margin-bottom: 3rem;
}
.nextStep {
  margin-left: 8rem;
}
.el-button:active {
  color: red;
  border-color: red;
  outline: 0;
}
.el-button:focus,
.el-button:hover {
  background-color: #ff4e39;
  color: white;
}
@keyframes slideBacks {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(0);
  }
}
</style>