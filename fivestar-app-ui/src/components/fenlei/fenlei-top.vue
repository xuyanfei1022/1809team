<template>
  <header>
    <h2>分类</h2>
    <img src="../../../static/img/flsearch.png" alt="">
  </header>
</template>

<script>
    export default {
        name: "fenlei-top"
    }
</script>

<style scoped>
  header{
    height: .44rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
  }
  header h2{
    font-size:.16rem;
    color:#1a1b1c;
  }
  header img{
    width:.18rem;
    height:.18rem ;
    display: block;
    padding:0 .15rem 0 1.37rem;
  }

</style>
