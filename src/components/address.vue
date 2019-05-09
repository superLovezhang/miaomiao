<template>
  <div class="addressOut">
    <loading v-if="flag" />
    <scroller v-else ref="aim">
      <div class="select_address">
        <p class="hot_city">热门城市</p>
        <ul class="city_item">
          <li v-for="item in hotcity" :key="item.id" @tap="submit(item.nm,item.id)">{{ item.nm }}</li>
        </ul>
        <div class="py" v-for="item in addressList" :key="item.index">
          <p class="a">{{ item.index }}</p>
          <ul class="a_item">
            <li v-for="items in item.list" :key="items.id" @tap="submit(items.nm,items.id)">{{ items.nm }}</li>
          </ul>
        </div>
      </div>
      <div class="slidebar">
        <ul>
          <li
            v-for="(item,index) in addressList"
            :key="item.index"
            @tap="ComeTo(index)"
          >{{ item.index }}</li>
        </ul>
      </div>
    </scroller>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressList:[],
      hotcity:[],
      flag:true
    };
  },
  created() {
    //想要的样子{ index:'A', list:{ nm:'九江'，id:12138 } }
    if(window.localStorage.getItem('newlist') && window.localStorage.getItem('hotcity')){
       this.addressList = JSON.parse( window.localStorage.getItem('newlist'));
       this.hotcity = JSON.parse( window.localStorage.getItem('hotcity'));
       this.flag = false;
    }else(
    this.axios.get("/api/cityList").then(res => {
      var all = res.data.data.cities;
      var linshi = [];
      if (res.data.msg == "ok") {
        var { newlist, hotcity } = this.format(all);
        linshi = newlist.sort((a1, a2) => {
          if (a1.index > a2.index) {
            return 1;
          } else if (a1.index < a2.index) {
            return -1;
          } else return 0;
        });
        this.addressList = linshi;
        this.hotcity = hotcity;
        window.localStorage.setItem("newlist",JSON.stringify(linshi));
        window.localStorage.setItem("hotcity",JSON.stringify(hotcity));
        this.flag = false;
      }
    }) )
  },
  methods: {
    format(all) {
      var newlist = [];
      var hotcity = [];
      for (var i = 0; i < all.length; i++) {
        var firstLetter = all[i].py.slice(0, 1).toUpperCase();
        if (isSame(firstLetter)) {
          newlist.push({
            index: firstLetter,
            list: [{ nm: all[i].nm, id: all[i].id }]
          });
        } else {
          for (var j = 0; j < newlist.length; j++) {
            if (newlist[j].index === firstLetter) {
              newlist[j].list.push({ nm: all[i].nm, id: all[i].id });
            }
          }
        }
      }
      function isSame(firstLetter) {
        for (var i = 0; i < newlist.length; i++) {
          if (newlist[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      for (var i = 0; i < all.length; i++) {
        if (all[i].isHot === 1) {
          hotcity.push({ id: all[i].id, nm: all[i].nm });
        }
      }
      return {
        newlist,
        hotcity
      };
    },
    ComeTo(index) {
      var allA = document.getElementsByClassName("a");
      // document.documentElement.scrollTop = allA[index].offsetTop - 90;
      this.$refs.aim.toScroll(-(allA[index].offsetTop));
    },
    submit(nm,id){
      this.$store.commit('getAddress',{ nm, id });
      this.$router.push('/movies/newplay')
      window.localStorage.setItem('localNM',nm)
      window.localStorage.setItem('localID',id)
    }
  }
};
</script>

<style lang="scss" scoped>
.addressOut {
  width: 100%;
  height: 32.8125rem;
}

.select_address {
  width: 100%;
  overflow: hidden;
  margin: 5.625rem 0 3.125rem 0;
  padding-top: 0.0625rem;
  font-weight: 800;
  color: #333;
  background-color: #fff4f2;
}
.select_address .hot_city {
  text-indent: 0.9375rem;
  font-size: 0.875rem;
  line-height: 1.875rem;
  margin-top: 1.5625rem;
  background-color: #f1eff1;
}
.select_address .city_item {
  margin-top: 1.25rem;
  padding-left: 0.625rem;
  width: 100%;
  height: 12.5rem;
}
.select_address .city_item li {
  float: left;
  margin: 0.3125rem;
  width: 6.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 0.3125rem;
  background-color: white;
}
.a {
  text-indent: 0.9375rem;
  font-size: 0.875rem;
  line-height: 1.875rem;
  background-color: #f1eff1;
}
.a_item {
  margin-top: 1.25rem;
  padding-left: 0.9375rem;
  width: 100%;
}
.a_item li {
  margin-top: 1.125rem;
}
.slidebar {
  position: fixed;
  text-align: center;
  top: 50%;
  right: 0;
  background-color: white;
  transform: translate(0, -50%);
}
</style>