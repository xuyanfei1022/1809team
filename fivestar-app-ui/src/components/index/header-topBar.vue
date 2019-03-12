<template>
  <div class="top_bar">
    <div class="search_container">
      <a href="javascript:;" class="search">
        <img src="../../../static/img/s1.jpg" alt="">
        五星享购
      </a>
      <a class="tz" href="javascript:;">
        <img src="../../../static/img/tz2.png" alt="">
      </a>
    </div>
    <div class="top_nav">
      <a href="javascript:;">首页推荐</a>
      <a href="javascript:;">精选电视</a>
      <a href="javascript:;">空调爆款</a>
      <a href="javascript:;">品质厨电</a>
      <a href="javascript:;">首页推荐</a>
      <a href="javascript:;">精选电视</a>
      <a href="javascript:;">空调爆款</a>
      <a href="javascript:;">品质厨电</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "headerTopBar",
    }
</script>

<style scoped>
  .search_container{
    width:100%;
    display: flex;
    justify-content: space-between;
  }
  .search{
    width: 3.05rem;
    height: .34rem;
    background: #f0f0f0;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 14px;
    color: #b2b2b2;
    margin-top:.18rem;
    margin-left: .2rem;
    border-radius: 5px;
  }
  .search img{
    width:.16rem;
    height: .16rem;
    display: block;
    padding:0 .1rem;
  }
  .tz img{
    width: .18rem;
    height: .22rem;
    display: block;
    padding-top: .24rem;
    padding-right: .12rem;
  }
  .top_nav{
    height: .45rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    overflow-x:auto;
  }
  .top_nav a{
    /* height: .43rem; */
    line-height: .43rem;
    text-align: center;
    padding: 0 .16rem;
    font-size:14px;
    color: black;
    flex-shrink:0;
  }
  .top_nav a:nth-child(1){
    border-bottom:2px solid #e00550;
    color:#e00550;
  }
</style>
