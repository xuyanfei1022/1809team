<template>
  <div class="cup">
    <div class="sheng">
      <fenlei-top></fenlei-top>
      <fenlei-con v-if="datas.pro" :datas="datas.pro"></fenlei-con>
    </div>
    <ffooter></ffooter>
  </div>
</template>

<script>
  import fenleiTop from "../components/fenlei/fenlei-top"
  import fenleiCon from "../components/fenlei/fenlei-con"
  import ffooter from "../components/common/ffooter"
  import fenleiApi from "../../apis/fenleiApi";
    export default {
        name: "fenlei",
        components:{
          fenleiTop,
          fenleiCon,
          ffooter
        },
      data(){
        return {
          datas:{}
        }
      },
      methods:{
        _initData(){
          fenleiApi.getData(data=>{
            // console.log(data)
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
/*html,body{*/
  /*height:100%;*/
/*}*/
.cup{
  height: 100%;
  display: flex;
  flex-direction:column;
}
.sheng{
  flex: 1;
  overflow-y:auto;
}
</style>
