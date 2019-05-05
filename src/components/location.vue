<template>
  <div class="locationBox">
    <div class="location" v-for="item in locations" :key="item.id">
      <span class="dollar">{{ item.sellPrice }}元起</span>
      <p class="locationItem">{{ item.nm }}</p>
      <h5 class="specific">
        {{ item.addr }}
        <i>{{ item.distance }}</i> 
        </h5>
      <p class="card">
        <span v-for="(value, key) in item.tag" :key="key" v-if="value === 1" :class="key">{{ key | filt }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations:[],
    }
  },
  created(){
    this.axios.get('/api/cinemaList?cityId=10').then(res=>{
      if(res.data.msg === 'ok'){
        this.locations = res.data.data.cinemas;
      }
    })
  },
  filters:{
    filt(value){
       var data = {allowRefund:"退",sell:"售卖",snack:"小吃卡",endorse:"折扣卡"}
       return data[value];
    }
  }
};
</script>

<style lang="scss" scoped>
.locationBox {
  overflow: hidden;
  font-weight: 800;
  color: black;
  padding: 1.25rem 0.9375rem;
  margin-bottom: 2.3rem;
}
.location {
  position: relative;
  width: 100%;
  height: 6.25rem;
  border-bottom: 0.0625rem solid #ccc;
}
.locationItem {
  font-size: 1rem;
}
.dollar {
  position: absolute;
  top: -.625rem;
  right: -5rem;
  color: #e07471;
}
.specific {
  font-size: 0.75rem;
  color: #ccc;
}
.specific i{
  color: #333;
  font-style: normal;
  position: absolute;
  right: 1.25rem;
}
.card span {
  font-weight: normal;
  font-size: .75rem;
  color: #ffbb52;
  margin-right: 0.3125rem;
  border: 1px solid #ffbb52;
}
.locationItem,
.dollar,
.specific,
.card {
  width: 13rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.625rem;
}
.location .allowRefund, .location .endorse{
  border:1px solid #00aee8;
  color: #00aee8;
}
</style>