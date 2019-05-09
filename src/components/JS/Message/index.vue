<template>
    <div class="message">
       <p>{{ data.title }}</p>
       <p>{{ data.city }}</p>
       <div class="bottomBox">
           <div @click="handleCancle">取消</div>
           <div @click="handleOk">切换定位</div>
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.message{
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%,-50%);
    box-shadow: 3px 3px 3px #ccc;
    border: 1px solid #ccc;
}
.message >p{
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
.message p:nth-child(2){
    margin-top: 30px;
    text-align: center;
    width: 100%;
    height: 80px;
    font-size: 15px;
}
.bottomBox{
    height: 30px;
    display: flex;
    text-align: center;
    border-top: 1px solid #333;
    justify-content: space-between;
}
.bottomBox >div{
   width: 50%; 
   border-right: 1px solid #333;
}
.bottomBox div:nth-child(2){
    border: none;
}
</style>