<template>
  <div class="cup">
    <div class="sheng">
      <fheader v-if="datas.banner" :datas="datas.banner"></fheader>
      <fsection v-if="datas" :datas="datas"></fsection>
    </div>
      <ffooter></ffooter>
  </div>
</template>

<script>
  import fheader from "../components/index/fheader"
  import fsection from "../components/index/fsection"
  import ffooter from "../components/common/ffooter"
  import indexApi from "../../apis/indexApi";
    export default {
        name: "index",
        components:{
          fheader,
          fsection,
          ffooter
        },
        data(){
          return {
            datas:{}
          }
        },
      methods:{
        _initData(){
          indexApi.getData(data=>{
          console.log(data)
            this.datas = data
          })
        }
      },
      created(){
        this._initData()
      }
    }
</script>

<style scoped>
body{
  background:#f4f5f6;
}
html,body{
  display:flex;
  flex-direction: column;
}
.cup {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sheng{
  flex:1;
  overflow-y:auto;
}
</style>
