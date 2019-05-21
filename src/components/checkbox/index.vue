<template>
  <div class="checkBox" :style="{'color': colors }">
    <input
      type="checkbox"
      id="checkOne"
      @click="handleToGou"
      ref="checkBoxItem"
      :style="{'width': widths, 'height': heights }"
    >
    <label for="checkOne" class="lab" :style="{'width': widths, 'height': heights }"></label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    widths: {
      default: "25px"
    },
    heights: {
      default: "25px"
    },
    colors: {
      default: "blue"
    },
    re_user: {},
    re_passward: {},
    re_passwards: {}
  },
  data() {
    return {
      width: this.widths,
      height: this.heights
    };
  },
  methods:{
    handleToGou(){
      this.$store.state.checkBox.isChecked = this.$refs.checkBoxItem.checked;
    }
  }
};
</script>

<style lang="scss" scoped>
.checkBox {
  display: inline-block;
  position: relative;
}
#checkOne {
  vertical-align: middle;
  opacity: 0;
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.lab {
  position: absolute;
  left: 0;
  border-radius: 5px;
  border: 1px #ccc solid;
  display: inline-block;
}
#checkOne:checked + .lab {
  background-color: #ff4e39;
}
#checkOne:checked + .lab:after {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "\2714";
  text-align: center;
  border-radius: 5px;
  display: inline-block;
}
</style>