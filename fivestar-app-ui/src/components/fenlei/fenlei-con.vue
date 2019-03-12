<template>
<div class="cup">
  <section>
    <!--左侧的导航  传入的数据为Pro数组，每个数组是一个品牌对象-->
    <nav>
    <a :key="ind" :class="{active:index==ind}" v-for="(u,ind) in datas" @click="tab(ind)">{{u.name}}</a>
    </nav>

    <aside>
    <div :key="pind" v-for="(u,pind) in datas" v-if="pind==index">
      <div class="con">
        <div class="tit">
          <div></div>
          <span><router-link tag="a" to="/pinpai" href="">品牌</router-link></span>
          <div></div>
        </div>
        <div class="product">
          <a :key="index" v-for="(p,index) in u.ppImgs" @click='getPinpai(p.name)'><img :src="p.picture" alt="0"><span>{{p.name}}</span></a>
        </div>
      </div>
      <div class="con">
        <div class="tit">
          <div></div>
          <span><router-link tag="a" to="/leixing" href="javascript:;">类型</router-link></span>
          <div></div>
        </div>
        <div class="product">
          <a :key="ind" v-for="(x,ind) in u.typeImgs" @click='getLeixing(x.name)'><img :src="x.picture" alt=""><span>{{x.name}}</span></a>
        </div>
      </div>
    </div>
    </aside>
  </section>
</div>
</template>

<script>

    export default {
        name: "fenlei-con",
        props:["datas"],

      data(){
        return {
          index:0
        }
      },

      methods:{
        tab(ind){
          this.index=ind
          // console.log(ind)
        },
        getPinpai(id){
          this.$router.push("/pinpai/"+"goodsList/"+id)
        },
        getLeixing(id){
          this.$router.push("/leixing/"+"goodsList/"+id)
        },

      }
    }
</script>

<style scoped>
  section{
    flex:1;
    display: flex;
    justify-content: space-between;
  }
  nav{
    /* height:6rem; */
    width:.82rem;
    background:#fafafa;
  }
  nav a{
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color:#1a1b1c;
    border-left:1px solid transparent;
  }
  aside{
    flex:1;
    overflow-y:auto;
    background: #FFFFFF;
  }

  /* aside */
  .tit{
    height:.5rem;
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .tit span{
    height: .5rem;
    display: block;
  }
  .tit span a{
    display: block;
    line-height: .5rem;
    font-size:.16rem;
    color:#333;
    padding: 0 .09rem;
  }
  .tit div{
    width:.24em;
    border-bottom: 1px solid #858585;
  }
  .product{
    display: flex;
    flex-wrap: wrap;
  }
  .product a{
    width: 33.3%;
    margin-top: .2rem;
  }
  .product a img{
    width:.78rem;
    height: .78rem;
    display: block;
    margin: 0 auto;
  }
  .product span{
    font-size: 12px;
    color:#333;
    display: block;
    text-align: center;
    padding-top:.1rem;
    margin: 0 auto;
  }
  .cup{
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .active{
    color:#e00550;
    border-left:1px solid #e00550;
    background:white;
  }
</style>
