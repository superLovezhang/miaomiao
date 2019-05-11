<template>
    <div class="footer">
		<router-link tag="div" to="/movies" class="movies">
			<div class="ico">
				<i class="iconfont icon-dianying"></i>
				<p>电影</p>
			</div>
		</router-link>
		<router-link tag="div" to="/cinema" class="cinema">
			<div class="ico">
				<i class="iconfont icon-wode"></i>
				<p>影院</p>
			</div>
		</router-link>
		<router-link tag="div" to="/mine" class="mine ">
			<div class="ico">
				<i class="iconfont icon-yingyuana"></i>
			    <p>我的</p>
			</div>
		</router-link>
	</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer{
     width: 100%;
     height: 3.125rem;
     position: fixed;
     bottom: 0;
     background-color: white;
     text-align: center;
     font-size: 0.8rem;
     color: #272121;
     font-weight: 800;
     z-index: 111;
     border-top: 0.125rem #ccc solid;
     display: flex;
}
 .movies{
     flex-grow: 1;
}
 .mine{
     flex-grow: 1;
}
 .cinema{
     flex-grow: 1;
}
 .ico{
     margin-top: 0.625rem;
}
 .iconfont{
     font-size: 1.125rem;
}
 .ico p{
     margin-top: 0.125rem;
}
.router-link-active{
     color: red;
}
 
</style>