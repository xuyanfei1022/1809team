<template>
  <footer>
    <router-link to="/" ><img src="../../../static/img/sy.png" alt=""><span>首页</span></router-link>
    <router-link to="/fenlei" ><img src="../../../static/img/fl.png" alt=""><span>分类</span></router-link>
    <router-link to="/login" ><img src="../../../static/img/gou.png" alt=""><span>购物车</span></router-link>
    <router-link to="/login" ><img src="../../../static/img/wd.png" alt=""><span>我的</span></router-link>
  </footer>
</template>

<script>
    export default {
        name: "ffooter",
        data(){
          return{
            isshow:true
          }
        }
    }
</script>

<style scoped>
  /* footer */
  footer{
    height:.38rem;
    display: flex;
    background:white;
    padding:.07rem 0;
  }
  footer a{
    flex:1;
    text-align: center;
  }
  footer img{
    width:.22rem;
    height: .22rem;
    margin:0 auto;
    display: block;
  }
  footer span{
    font-size:10px;
    color: black;
    display: block;
    padding-top:.03rem;
  }
  footer a:nth-child(1) span{
    color:#e00550;
  }
</style>
