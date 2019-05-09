<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    Handleupdate: {
      type: Function,
      default: function() {}
    },
    Handleupdated: {
      type: Function,
      default: function() {}
    }
  },
  created() {
    this.$nextTick(() => {
      var scroll = new BScroll(".wrapper", {
        tap: true,
        probeType: 1
      });
      this.scroll = scroll
      scroll.on("scroll", pos => {
        this.Handleupdate(pos);
      });
      scroll.on("touchEnd", pos => {
        this.Handleupdated(pos);
      });
    });
  },
  methods: {
    toScroll(y){
       this.scroll.scrollTo(0,y)
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  position: relative;
}
</style>