<template>
  <div id="App">
    <router-view/>
  </div>
</template>

<script>
  import index from "./pages/index";
  export default {
    name: 'App',
    components:{
      index
    }
  }
</script>

<style>
  /*@charset "utf-8";*/
  /*css document*/
  body,h1,h2,h2,h4,h5,h6,p,ul,ol,dl,dd,td,input,select,option,textarea{
    margin:0;
    padding:0;
  }
  html{
    font-size: 26.67vw;
    height:100%;
  }
  body{
    background:#f4f5f6;
    font-family:"微软雅黑";
    height:100%;
  }
  ul,ol{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  img{
    border:none;
  }
  #App{
    width:100%;
    height: 100%;
  }
</style>
