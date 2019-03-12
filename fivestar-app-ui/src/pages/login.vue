<template>
    <login-con></login-con>
</template>

<script>
    import loginCon from "../components/login/login-con"
    export default {
        name: "login",
        components:{
          "login-con":loginCon
        }
    }
</script>

<style scoped>
  body{
    background:white;
  }
</style>
