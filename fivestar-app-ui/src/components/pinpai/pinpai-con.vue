<template>
  <section>
    <div class="tuijian">

      <div class="dianqi">
        <a href="##">
          <img src="../../../static/img/sn1.jpg" alt="">
          <span>西门子冰箱KM49E...</span>
          <p>￥<b>4000</b></p>
        </a>
        <a href="##">
          <img src="../../../static/img/sn2.jpg" alt="">
          <span>西门子冰箱KM49E...</span>
          <p>￥<b>3090</b></p>
        </a>
        <a href="##">
          <img src="../../../static/img/sn3.jpg" alt="">
          <span>西门子冰箱KM49E...</span>
          <p>￥<b>5000</b></p>
        </a>

      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "pinpai-con",
        props:["datas"]
    }
</script>

<style scoped>

  .dianqi{
    display: flex;
    justify-content:left;
    align-items: center;
    flex-wrap: wrap;
  }
  .dianqi a{
    margin-left:.1rem;
    background:white;
    margin-top:.1rem;
    padding-bottom: .1rem;
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
    padding-left:.1rem;
  }
  .dianqi p{
    font-size: 14px;
    color:#e42567;
    padding:.05rem;
  }
</style>
