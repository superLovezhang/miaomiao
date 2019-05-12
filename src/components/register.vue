<template>
  <div class="register">
    <el-input placeholder="请输入内容" v-model="re_user" clearable class="input1"></el-input>
    <el-input placeholder="请输入密码" v-model="re_passward" show-password class="input2"></el-input>
    <el-input placeholder="请再次输入密码" v-model="re_passwards" show-password class="input3"></el-input>
    <!-- <el-checkbox v-model="checked" class="input4" >我已阅读并同意《喵喵网用户协议》</el-checkbox> -->
    <checkbox widths="20px" heights="20px" class="gous"><span class="slots">我已阅读并同意《喵喵网用户协议》</span></checkbox>
    <div class="button">
        <el-button type="danger">注册</el-button>
    </div>
  </div>
</template>

<script>
import checkbox from '@/components/checkbox';
export default {
  components:{
    checkbox
  },
  data() {
    return {
      re_user: "",
      re_passward: "",
      re_passwards: "",
      checked:false
    };
  }
};
</script>

<style lang="scss" scoped>
.gous{
    margin: 10px 0 0 15px;
}
.slots{
  color: #333;
  font-size: 16px;  
}
.register {
  position: absolute;
  top: 3.125rem;
  width: 100%;
  min-height: 32.5rem;
  background-color: white;
}
.input1,.input2,.input3 {
  margin-top: .625rem;
}
.input1{
    margin: 0;
}
.input2 {
}
.input3 {
}

.input4{
    margin: 1.25rem 0 0 .9375rem;
}
.button{
    width: 100%;
    position: relative;
}
.el-button{
   margin-top: 50px;
   width: 300px;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   background-color: #ff4e39;
}
</style>