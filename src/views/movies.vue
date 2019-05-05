<template>
  <div>
    <headers/>
    <div class="top">
      <router-link tag="div" to="/movies/address" class="address">
        武汉
        <i class="iconfont icon-xiala"></i>
      </router-link>
      <router-link tag="div" to="/movies/newplay" class="newplay">正在热映</router-link>
      <router-link tag="div" to="/movies/comming" class="comming">即将上映</router-link>
      <router-link tag="div" to="/movies/search" class="search">
        <i class="iconfont icon-search"></i>
      </router-link>
    </div>
    <router-view></router-view>
    <tabbar class='down'/>
  </div>
</template>

<script>
import headers from "@/components/header";
import tabbar from "@/components/tab_bar";
export default {
  components: {
    tabbar,
    headers
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 2.5rem;
  display: flex;
  font-weight: 800;
  text-align: center;
  line-height: 2.5rem;
  color: #333;
  position: fixed;
  top: 3.125rem;
  z-index: 10;
  background-color: white;
  border-bottom: 0.0625rem solid #ccc;
}
.address {
  flex-grow: 1;
}
.newplay {
  flex-grow: 1;
}
.comming {
  flex-grow: 1;
}
.search {
  flex-grow: 1;
}
.icon-search {
  color: #cd5c5c;
}
.router-link-active {
  box-sizing: border-box;
  border-bottom: 0.125rem solid #ff0000;
}
</style>