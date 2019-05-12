<template>
  <div>
    <headers/>
    <login class="logins"/>
    <tabbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import headers from "@/components/header";
import tabbar from "@/components/tab_bar";
import login from '@/components/login.vue';
export default {
  components: {
    tabbar,
    headers,
    login
  }
};
</script>

<style lang="scss" scoped>
.logins{
    margin: 3.125rem 0 3.125rem 0;
}
</style>