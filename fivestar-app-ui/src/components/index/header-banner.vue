<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="u in datas"><img :src="u" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
    import Swiper from "../../../static/js/swiper.min";
    export default {
      name: "headerBanner",
      props:["datas"],
    }
    window.onload = function () {
        new Swiper('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        speed: 300, //图片划过速度
        //自动播放
        autoplay: {
          delay: 3000, //延迟播放下一张图片
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      })

    }
</script>

<style scoped>
  @import url(../../../static/css/swiper.min.css);
  /* 轮播的图片设置 */
  .swiper-wrapper img{
    display: block;
    height: 1.6rem;
    width:100%;
  }
</style>
