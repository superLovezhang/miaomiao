<template>
  <div class="register">
    <goBack></goBack>
    <el-input placeholder="请输入账号" v-model="re_user" clearable class="input1"></el-input>
    <el-input placeholder="请输入密码" v-model="re_passward" show-password class="input2"></el-input>
    <el-input placeholder="请再次输入密码" v-model="re_passwards" show-password class="input3"></el-input>
    <checkbox widths="20px" heights="20px" class="gous">
      <span class="slots">我已阅读并同意《喵喵网用户协议》</span>
    </checkbox>
    <div class="button">
      <el-button type="danger" @click="handlePassward">注册</el-button>
    </div>
  </div>
</template>

<script>
import checkbox from "@/components/checkbox";
export default {
  components: {
    checkbox
  },
  data() {
    return {
      re_user: "",
      re_passward: "",
      re_passwards: ""
    };
  },
  methods: {
    handlePassward() {
      var userDate = { userList: [] };
      //如果有缓存
      if(JSON.parse(window.localStorage.getItem("userDate"))){
        var localUser = JSON.parse(window.localStorage.getItem("userDate")).userList;
        if (this.re_user && this.re_passward && this.re_passwards) {
        localUser.filter(item => {
          if (!(item.userName.includes(this.re_user))) {
            if (this.re_passward === this.re_passwards) {
              if(this.$store.state.checkBox.isChecked === false){
                 alert("请勾选喵喵用户协议！");
              }else{
                alert("注册成功！");
                userDate.userList.push({userName: this.re_user,userPassward: this.re_passward});
                window.localStorage.setItem("userDate", JSON.stringify(userDate));
                this.$router.push("/mine");
              }
          } else {
            alert("两次密码不一致！请重新输入！");
          }
            }else{
              alert("改用户名已被注册，请重新输入！");
            }          
        });
      } else {
        confirm("用户名或密码必须填写！");
      }
      //没有缓存
      }else{
         if (this.re_user && this.re_passward && this.re_passwards) {
            if (this.re_passward === this.re_passwards) {
              if(this.$store.state.checkBox.isChecked === false){
                 alert("请勾选喵喵用户协议！");
              }else{
                alert("注册成功！");
                userDate.userList.push({userName: this.re_user,userPassward: this.re_passward});
                window.localStorage.setItem("userDate", JSON.stringify(userDate));
                this.$router.push("/mine");
              }
          } else {
            alert("两次密码不一致！请重新输入！");       
        }
      } else{
        confirm("用户名或密码必须填写！");
      }
      }

      
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  position: absolute;
  top: 0;
  width: 100%;
  animation: slideBack 0.2s;
  min-height: 32.5rem;
  z-index: 11;
  background-color: white;
}
.gous {
  margin: 10px 0 0 15px;
}
.slots {
  color: #333;
  font-size: 16px;
}
@keyframes slideBack {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(0);
  }
}
.input1,
.input2,
.input3 {
  margin-top: 0.625rem;
}
.input1 {
  margin-top: 3.125rem;
}

.button {
  width: 100%;
  position: relative;
}
.el-button {
  margin-top: 50px;
  width: 300px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff4e39;
}
</style>