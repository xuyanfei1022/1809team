<template>
   <div>
     <section-hot v-if="datas.hot" :datas="datas.hot"></section-hot>
     <section-two v-if="datas.hotTwo" :datas="datas.hotTwo"></section-two>
     <section-tuijian v-if="datas.tuijian" :datas="datas.tuijian"></section-tuijian>
   </div>
</template>

<script>
    import sectionHot from "./section-hot";
    import sectionTwo from "./section-two";
    import sectionTuijian from "./section-tuijian";
    export default {
        name: "fsection",
        components:{
          sectionHot,
          sectionTwo,
          sectionTuijian
        },
        props:["datas"]
    }
</script>

<style scoped>

</style>
