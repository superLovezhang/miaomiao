<template>
  <div>
      <el-header>亲爱的管理员:admin，欢迎您的进入</el-header>
      <el-container>
        <el-aside width="200px">
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-message"></i>
                  <router-link to="/admin/user" tag="span">用户管理</router-link>
                </template>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <router-link to="/admin/movies" tag="span">电影管理</router-link>
                </template>

              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <router-link to="/admin/cinema" tag="span">影院管理</router-link>
                </template>
                
              </el-submenu>
            </el-menu>
          </el-aside>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
//   text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
//   line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>