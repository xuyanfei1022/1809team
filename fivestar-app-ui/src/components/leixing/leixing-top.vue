<template>
  <header>
    <div class="top">
      <router-link tag="a" to="/fenlei"><img class="back" src="../../../static/img/back.png" alt=""></router-link>
      <h2>类型</h2>
      <img class="sou" src="../../../static/img/flsearch.png" alt="">
    </div>
    <div class="top_nav">
      <a href="javascript:;">曲面电视</a>
      <a href="javascript:;">超薄电视</a>
      <a href="javascript:;">HDR电视</a>
      <a href="javascript:;">OLED电视</a>
      <a href="javascript:;">4K超清电视</a>
      <a href="javascript:;">人工智能</a>
      <a href="javascript:;">55寸</a>
      <a href="javascript:;">65寸</a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "leixing-top",
      created(){
        var params=this.$route.params.id
        console.log(params)
      }
    }
</script>

<style scoped>
  header{
    background: white;
  }
  .top{
    height: .46rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .back{
    width:.1rem;
    height: .16rem;
    display: block;
    padding:0 .2rem;
  }
  .top h2{
    font-size: .16rem;
    color:#1a1b1c;
  }
  .sou{
    width:.21rem;
    height: .21rem;
    display: block;
    padding-right: .2rem;
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
