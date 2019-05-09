<template>
  <div class="outbox">
    <scroller :Handleupdate="Handleupdate" :Handleupdated="Handleupdated">
      <div class="newp">
        <p class="update">{{ update }}</p>
        <loading v-if="flag"></loading>
        <div v-else class="newplayitem" v-for="item in newplayList" :key="item.id">
          <div class="content">
            <img :src="item.img | setWH('70.100')">
            <h4>
              {{ item.nm }}
              <img src="@/assets/3d.png" v-if="item.globalReleased">
            </h4>
            <p class="audio">
              观众评
              <span>{{ item.sc }}</span>
            </p>
            <p class="strring">{{ item.star }}</p>
            <p class="tody">{{ item.showInfo }}</p>
          </div>
          <a href="javascript:;">购票</a>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {fun as message} from '@/components/JS'
export default {
  data() {
    return {
      newplayList: [],
      update: "",
      flag: true,
      thisID:-1
    };
  },
  created(){
     message({ 
       title:'定位',
       city:'瑞昌',
       cancle:'取消',
       ok:'切换定位',
       handleCancle: function () { },
       handleOk: function () { }
      })
  },
  beforeRouteUpdate(to, from, next) {},
  activated() {
    // this.axios.get("api/movieOnInfoList?cityId="+this.$store.state.address.id).then(res => {
    //   if (res.data.msg === "ok") {
    //     this.newplayList = res.data.data.movieList;
    //     this.flag = false;
    //   }
    // });
    var newsID = this.$store.state.address.id;
    
    if(this.thisID === newsID){
    }
    else{
    this.axios.get("api/movieOnInfoList?cityId=" + newsID).then(res => {
          if (res.data.msg === "ok") {
            this.newplayList = res.data.data.movieList;
            this.flag = false;
            this.thisID = newsID; 
          }
      });    }
  },
  methods: {
    Handleupdate(pos) {
      if (pos.y > 60) {
        this.update = "正在更新";
      }
    },
    Handleupdated(pos) {
      if (pos.y > 60) {
        this.update = "更新完毕";
        this.axios.get("api/movieOnInfoList?cityId=15").then(res => {
          if (res.data.msg === "ok") {
            setTimeout(() => {
              this.newplayList = res.data.data.movieList;
              this.update = "";
            }, 1000);
          }
        });
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.outbox {
  width: 100%;
  height: 32.8125rem;
}
.newp {
  margin: 5.625rem 0 3.125rem 0;
}
.newplayitem {
  padding: 0.9375rem;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.content {
  width: 18.75rem;
  height: 6.25rem;
}
.newplayitem img {
  margin-right: 0.5rem;
  //  width: 5rem;
  float: left;
}
.newplayitem h4 {
  position: relative;
  color: black;
  font-size: 1rem;
}
.newplayitem h4 img {
  width: 2.6875rem;
  position: absolute;
  right: 0;
  top: 0.3125rem;
}
.newplayitem .audio,
.newplayitem .tody,
.newplayitem .strring {
  font-size: 0.75rem;
  font-weight: 600;
  color: #a3a2a3;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 0.5rem;
}
.newplayitem span {
  font-size: 1.0625rem;
  color: #f76f12;
  font-weight: bolder;
}
.newplayitem a {
  text-decoration: none;
  color: white;
  padding: 0.3125rem;
  right: 1.25rem;
  bottom: 1.25rem;
  border-radius: 0.3125rem;
  position: absolute;
  background-color: #ff4e39;
}
.update {
  padding-left: 0.9375rem;
  font-weight: 800;
}
</style>