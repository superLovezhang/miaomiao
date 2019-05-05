<template>
  <div>
    <headers/>
    <div class="Cinematop">
      <div class="city cinema_active">
        全城
        <i class="iconfont icon-xiala"></i>
      </div>
      <div class="brand">
        品牌
        <i class="iconfont icon-xiala"></i>
      </div>
      <div class="character">
        特色
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>
    <location />
    <tabbar/>
  </div>
</template>

<script>
import headers from "@/components/header";
import tabbar from "@/components/tab_bar";
import location from '@/components/location.vue'
export default {
  components: {
    tabbar,
    headers,
    location
  }
};
</script>

<style lang="scss" scoped>
.Cinematop {
  margin-top: 3.125rem;
  width: 100%;
  height: 2.5rem;
  display: flex;
  font-weight: 800;
  text-align: center;
  line-height: 2.5rem;
  color: #333;
  border-bottom: 0.0625rem solid #ccc;
}
.city {
  flex-grow: 1;
}
.brand {
  flex-grow: 1;
}
.character {
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