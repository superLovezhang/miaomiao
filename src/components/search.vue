<template>
    <div>
       <div class="searchitem">
		<div class="searchbar">
			<input type="text" v-model="msg" />
			<i class="iconfont icon-search"></i>
		</div>
		<div class="type">
			<p>电影/综艺/电视剧</p>
		</div>
		<div class="search_movies" v-for="item in searchResult" :key="item.id">
			 <img :src="item.img | setWH('70.100')">
			 <div class="content">
                <h4> {{ item.nm }}<span> {{ item.sc }}</span></h4>
			    <p class="audio"> {{ item.enm }} </p>
                <p class="cat">{{ item.cat }}</p>
			    <p class="strring"> {{ item.star }}</p>
			    <p class="tody"> {{ item.pubDesc }}</p>
             </div>
		</div>
       </div>
       <div class="warrning" v-show="flag">
           Sorry,未搜索到结果！
       </div>
    </div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
    export default {
        data(){
            return{
                msg:'',
                flag:false,
                timer:null,
                searchResult:[]
            }
        },
        created(){

        },
        watch:{
            msg(value){
                clearTimeout(this.timer);
                this.timer = setTimeout(()=>{
                    this.axios.get('/api/searchList?cityId=10&kw='+value).then(res=>{
                    if(res.data.msg === 'ok'){
                    this.flag = false;
                    this.searchResult = res.data.data.movies.list;
                }
              }).catch(()=>{
                this.searchResult = [];
                this.flag = true;
              })
                },1000)
        }
    }
}
</script>

<style lang="scss" scoped>
.searchitem{
    margin:5.625rem 0 3.125rem 0;
}
 .searchbar{
     text-align: center;
     width: 100%;
     height: 2.5rem;
     position: relative;
     background-color: #f5f4f6;
}
 .searchbar .icon-search{
     position: absolute;
     top: 0.625rem;
     left: 2.125rem;
}
input{
     width: 90%;
     height: 60%;
     margin-top: 0.5rem;
     border: 0;
     border-radius: 0.3125rem;
     text-indent: 2.5em;
     color: #333;
     font-size: 1em;
     outline: none;
}

 .type{
     width: 100%;
     line-height: 1.875rem;
     color: #acaaac;
     text-indent: 1.2em;
     font-weight: 800;
     border-bottom: 0.0625rem solid #ccc;
}
 .search_movies{
     padding: 0.9375rem;
     position: relative;
     display: flex;
     justify-content: space-between;
     border-bottom: 1px solid #ccc;
}
.content{
   width: 17.5rem;
   height: 6.25rem;
}
 .search_movies img{
     margin-right: 0.5rem;
    //  width: 5rem;
     float: left;
}
 .search_movies h4{
     color: black;
     width: 13.75rem;
     font-size: 1rem;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
}
 .search_movies span{
     font-size: 1.1875rem;
     color: #f76f12 ;
     position: absolute;
     right: .625rem;
}
 .search_movies .audio,.search_movies .strring,.search_movies .tody,.search_movies .cat{
     font-size: .75rem;
     font-weight: 600;
     color: #a3a2a3;
     width: 13.75rem;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
     margin-top: 0.3rem;
}
.warrning{
    font-weight: 800;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.25rem;
    transform: translate(-50%,-50%)
}
 
</style>