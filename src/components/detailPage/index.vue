<template>
  <div class="detailPage">
    <goBack></goBack>
    <div class="detailItem">
      <scroller>
        <div
          class="detailBox"
          :style="{ 'background-image' : 'url('+detailList.img.replace(/w\.h/,'148.230')+')'}"
        ></div>
        <div class="search_movies">
          <img :src="detailList.img | setWH('100.150')">
          <div class="content">
            <h4>{{ detailList.nm }}</h4>
            <p class="audio">{{ detailList.enm }}</p>
            <p class="sore">{{ detailList.sc }}</p>
            <p class="cat">{{ detailList.cat }}</p>
            <p class="strring">{{ detailList.star }}</p>
            <p class="tody">{{ detailList.frt }}</p>
          </div>
        </div>
        <div class="introduction" ref="textBox">
          <p>{{ detailList.dra }}</p>
          <div class="button_toggle" @click="toggle"><i ref="icon" class="el-icon-arrow-up"></i></div>
        </div>
        <div class="swiper-container swiper" ref="actor">
          <ul class="actor swiper-wrapper">
            <li v-for="item in detailList.photos" :key="item" class="swiper-slide">
              <img :src="item | setWH('130.130')">
              <p class="actorName">大卫·雷奇</p>
            </li>
          </ul>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      detailList: [],
      adc: ""
    };
  },
  mounted() {
    this.axios.get("/api/detailmovie?movieId=" + this.id).then(res => {
      if (res.data.msg === "ok") {
        this.detailList = res.data.data.detailMovie;
        this.$nextTick(() => {
          new Swiper(this.$refs.actor, {
            slidesPerView: "auto",
            freeMode: false,
            freeModeSticky: true
          });
        });
      }
    });
  },
  methods:{
      toggle(){
        if(this.$refs.textBox.style.height !== '230px'){
          this.$refs.textBox.style.height = '230px';
          this.$refs.icon.className = 'el-icon-arrow-down';        
        }else{
          this.$refs.textBox.style.height = '80px';
          this.$refs.icon.className = 'el-icon-arrow-up'; 
        }
      }
  }
};
</script>

<style lang="scss" scoped>
.detailPage {
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 3.125rem;
  width: 100%;
  overflow: hidden;
  height: 1800px;
  background-color: white;
  z-index: 55;
  animation: slideBack 0.2s;
}
@keyframes slideBack {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(0);
  }
}
.detailItem {
  width: 100%;
  height: 32.8125rem;
}
.detailBox {
  position: absolute;
  top: 0rem;
  width: 100%;
  z-index: -1;
  height: 13rem;
  -webkit-filter: blur(0.9rem);
  filter: blur(0.9rem);
  background-size: cover;
  background-repeat: no-repeat;
}
.search_movies {
  margin-top: 3.125rem;
  padding: 0.9375rem;
  position: relative;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: space-between;
  border-bottom: 0.0625rem solid #ccc;
}
.content {
  width: 17.5rem;
  height: 6.25rem;
}
.search_movies img {
  margin-right: 0.9rem;
  width: 6.25rem;
  height: 9.375rem;
  float: left;
}
.search_movies h4 {
  color: white;
  width: 13.75rem;
  font-weight: normal;
  font-size: 1.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_movies span {
  font-size: 1.1875rem;
  color: #f76f12;
  position: absolute;
  right: 0.625rem;
}
.search_movies .audio,
.search_movies .strring,
.search_movies .tody,
.search_movies .cat,
.sore {
  font-size: 0.75rem;
  font-weight: 600;
  color: #b6adac;
  overflow: hidden;
  width: 13.75rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 0.4rem;
}
.introduction {
  box-sizing: border-box;
  width: 100%;
  padding: 1.25rem;
  position: relative;
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.button_toggle{
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  text-align: center;
}
.swiper {
  width: 100%;
  border: 1px solid #ccc;
}
.swiper-slide {
  width: 130px;
}
.actor {
  margin-top: 1.25rem;
  padding: 0.5rem 0 0.5rem 1.25rem;
}
.actor li {
  float: left;
  margin-right: 1rem;
}
.actor p {
  width: 4.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.8125rem;
  text-align: center;
}
.actor img {
  width: 130px;
  height: 69px;
}
</style>