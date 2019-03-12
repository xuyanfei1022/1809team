<template>
<div>
  <header>
    <router-link to="/" href="javascript:;"><img src="../../../static/img/back.png" alt=""></router-link>
    <span>登录</span>
  </header>
  <section>
    <nav>
      <a href="javascript:;">账号密码登录</a>
      <a href="javascript:;">书记快速登录</a>
    </nav>
    <div class="content">
      <div class="userid">
        <span>账号</span>
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="userid userpass">
        <span>账号</span>
        <input type="password" placeholder="请输6-20位密码">
        <img src="../../../static/img/cang.png" alt="">
      </div>
      <span class="login">登录</span>
      <div class="over">
        <a href="javascript:;">忘记密码</a>
        <span>|</span>
        <a href="javascript:;">快速注册</a>
      </div>
    </div>
  </section>
</div>
</template>

<script>
    export default {
        name: "login-con"
    }
</script>

<style scoped>
  /* header */
  header{
    height: .48rem;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  header img{
    display: block;
    width:.08rem;
    height: .16rem;
    margin-left: .2rem;
    margin-right: 1.33rem;
  }
  header span{
    font-size:.18rem;
    color:#1a1b1c;
  }
  /* section */
  nav{
    height: .38rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  nav a{
    font-size: .16rem;
    color:black;
    width:1.88rem;
    height: .38rem;
    line-height: .38rem;
    text-align: center;
  }
  nav a:first-child{
    color:#e00550;
    border-bottom:1px solid #e00550;
  }

  /* content */
  .content{
    margin-top: .3rem;
  }
  .userid{
    width: 3.35rem;
    height: .5rem;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom:1px solid #dbdbdb;
  }
  .userid span{
    font-size: .16rem;
    color:#1a1b1c;
    margin-right: .2rem;
  }
  .userid input{
    font-size: .16rem;
    border:none;
    outline:none;
    background:#f4f5f6;
  }
  .userpass img{
    width:.2rem;
    height:.1rem ;
    margin-left: .6rem;
  }
  .login{
    display: block;
    width:3.35rem;
    height: .4rem;
    color:#ffdde3;
    line-height: .4rem;
    margin: .3rem auto .12rem;
    background:#f193b3;
    font-size: .16rem;
    text-align: center;
    border-radius:.05rem;
  }
  .over{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .over span{
    font-size: .16rem;
    color:#c9c9c9;
    margin:0 .1rem;
  }
  .over a{
    font-size: 14px;
    color:#e00550;
  }
</style>
