<template>

    <div class="header">
      <header-top-bar></header-top-bar>
      <header-banner :datas="datas"></header-banner>
    </div>

</template>

<script>
import headerTopBar from "./header-topBar"
import headerBanner from "./header-banner"

export default {
        name: "fheader",
        components:{
          "header-top-bar":headerTopBar,
          "header-banner":headerBanner
        },

        props:["datas"]

}
</script>

<style scoped>
  /* header */
  .header{
    width: 100%;
    /* background:skyblue; */
  }
</style>
