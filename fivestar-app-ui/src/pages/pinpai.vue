<template>
    <div>
      <pinpai-top :datas="datas"></pinpai-top>
      <pinpai-con :datas="datas"></pinpai-con>
    </div>
</template>

<script>
import pinpaiTop from "../components/pinpai/pinpai-top"
import pinpaiCon from "../components/pinpai/pinpai-con"
import goodsListApi from "../../apis/goodsListApi"
    export default {
        name: "pinpai",
        components:{
          pinpaiTop,
          pinpaiCon
        },
        data(){
          return{
            datas:{}
          }
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
