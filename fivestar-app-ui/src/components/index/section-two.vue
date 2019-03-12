<template>
  <div class="active active_two">
    <h2>{{datas.title}}</h2>
    <div class="big_pic">
      <img :src="datas.bigImg" alt="">
    </div>
    <div class="product">
      <router-link to="" :key="ind" v-for="(u,ind) in datas.products"><img :src="u.img" alt=""><span>{{u.name}}</span></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "section-two",
        props:["datas"]
    }
</script>

<style scoped>
  .active{
    background: white;
    padding-bottom:.12rem;
    margin-top:.1rem;
  }
  .active h2{
    width: 100%;
    height: .55rem;
    line-height: .55rem;
    font-size: .16rem;
    text-align: center;
    background: white;
  }
  .product{
    display: flex;
    justify-content: space-between;
    overflow-x:auto;
  }
  .big_pic img{
    width:100%;
    height: 100%;
    display: block;
  }
  .product a img{
    width:1.13rem;
    height: 1.13rem;
    display: block;
    padding:0 .05rem;
  }
  .product a span{
    width:1.12rem;
    font-size: 12px;
    display: block;
    text-align: center;
    color:#333;
  }
  .active_two{
    padding-bottom:.28rem;
  }
</style>
