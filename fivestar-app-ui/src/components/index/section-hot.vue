<template>
  <div class="active">
    <h2>{{datas.title}}</h2>
    <div class="product">
      <div class="p_left">
        <img :src="datas.bigImg" alt="0"/>
      </div>
      <div class="p_right">
        <img v-for="u in datas.images" :src="u" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "section-hot",
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
  }
  .p_left img{
    width:1.74rem;
    height:1.74rem ;
    display: block;
    border-radius:.05rem;
    margin-left:.1rem;
  }
  .p_right img{
    width:1.74rem;
    height:.84rem;
    display: block;
    padding-right: .1rem;
    padding-bottom: .05rem;
  }
</style>
