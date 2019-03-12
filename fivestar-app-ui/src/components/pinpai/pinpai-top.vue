<template>
  <header>
    <div class="top">
      <router-link to="/fenlei"><img class="back" src="../../../static/img/back.png" alt=""></router-link>
      <h2>品牌</h2>
      <img class="sou" src="../../../static/img/flsearch.png" alt="">
    </div>
    <div class="top_nav">
      <a>索尼</a>
      <a>飞利浦</a>
      <a>海信</a>
      <a>长虹</a>
      <a>TCL</a>
      <a>东芝</a>
      <a>创维</a>
      <a>JVC</a>
      <a>熊猫</a>
      <a>小米</a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "pinpai-top",
        props:["datas"],
        created(){
          var params=this.$route.params.id
          console.log(params)
        }
    }

    // console.log(this.$route.params.id)
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
