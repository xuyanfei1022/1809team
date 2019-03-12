<template>
    <div>
      <leixing-top></leixing-top>
      <leixing-con></leixing-con>
    </div>
</template>

<script>
import leixingTop from "../components/leixing/leixing-top"
import leixingCon from "../components/leixing/leixing-con"
import goodsListApi from "../../apis/goodsListApi";
    export default {
        name: "leixing",
        components:{
          leixingTop,
          leixingCon
        },
      methods:{
        _initData(){
          goodsListApi.getData(data=>{
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

</style>
