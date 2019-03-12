<template>
  <div class="tuijian">
    <div class="foryou">
      <img :src="datas.bigImg" alt="">
    </div>
    <div class="dianqi">
      <router-link to="" href="" :key="ind" v-for="(u,ind) in datas.products">
        <img :src="u.img" alt="">
        <span>{{u.name}}</span>
        <p>￥<b>{{u.price}}</b></p>
      </router-link>

    </div>
  </div>
</template>

<script>
    export default {
        name: "section-tuijian",
        props:["datas"]
    }
</script>

<style scoped>
  .foryou{
    height: .54rem;
    line-height: .54rem;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .foryou img{
    width:2.96rem;
    height:.2rem;
    display: block;
  }
  .dianqi{
    display: flex;
    justify-content:left;
    align-items: center;
    flex-wrap: wrap;
  }
  .dianqi a{
    margin-left:.1rem;
    background:white;
    margin-bottom:.1rem;
  }
  .dianqi img{
    width:1.72rem;
    height:1.72rem;
    display: block;
  }
  .dianqi span{
    font-size: 14px;
    color:#333;
    display: block;
    text-align: center;
  }
  .dianqi p{
    font-size: 14px;
    color:#e42567;
    text-align: center;
  }
</style>
