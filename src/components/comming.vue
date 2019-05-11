<template>
  <div class="commintgOut">
    <loading v-if="flag" />
    <scroller v-else>
      <div class="com">
        <div class="commingitem" v-for="item in commingList" :key="item.id">
          <div class="content">
            <img :src="item.img | setWH('70.100')" @touchstart="Todetail(item.id)">
            <h4>
              {{ item.nm }}
              <img src="@/assets/3d.png" v-if="item.globalReleased">
            </h4>
            <p class="want">{{ item.wish }}人想看</p>
            <p class="actor">{{ item.star }}</p>
            <p class="relese">{{ item.showInfo }}</p>
            <a href="javascript:;">预售</a>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commingList: [],
      flag:true,
      thisID:-1
    };
  },
  activated() {
    var newsID = this.$store.state.address.id;
    if(this.thisID === newsID){

    }else{
    this.axios.get("/api/movieComingList?cityId="+newsID).then(res => {
      if (res.data.msg === "ok") {
        this.commingList = res.data.data.comingList;
        this.flag = false
        this.thisID = newsID;
      }
    });  }
  },
  methods:{
    Todetail(id){
      this.$router.push('/movies/2/detail/'+id)   
    }
  }
};
</script>

<style lang="scss" scoped>
.commintgOut {
  width: 100%;
  height: 32.8125rem;
}
.com {
  margin: 5.625rem 0 3.125rem 0;
}
.commingitem {
  padding: 0.9375rem;
  position: relative;
  border-bottom: 1px #ccc solid;
}
.content {
  width: 18.75rem;
  height: 6.25rem;
}
.content h4 img {
  width: 2.6875rem;
  position: absolute;
  right: 0;
  top: 0.3125rem;
}
.commingitem img {
  margin-right: 0.5rem;
  float: left;
}
.commingitem h4 {
  color: black;
  font-size: 1rem;
}
.commingitem .want,
.commingitem .actor,
.commingitem .relese {
  font-size: 0.75rem;
  font-weight: 600;
  color: #a3a2a3;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 0.5rem;
}
.commingitem span {
  font-size: 1.0625rem;
  color: #f76f12;
  font-weight: bolder;
}
.commingitem a {
  text-decoration: none;
  color: white;
  padding: 0.3125rem;
  right: 1.25rem;
  bottom: 1.25rem;
  border-radius: 0.3125rem;
  position: absolute;
  background-color: steelblue;
}
</style>