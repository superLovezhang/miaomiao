<template>
  <div class="header">
    <p>
      <i class="iconfont icon-left" @touchstart="goback"></i>喵喵影院
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-left {
  font-size: 1.25rem;
  position: absolute;
  left: 0.5rem;
}
.header {
  position: fixed;
  z-index: 111;
  top: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 20px;
  background-color: #ff4e39;
}
</style>