<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!--      3.使用組件標籤-->
    <HelloWorld/>
  </div>
</template>

<script>
  //1. 引入組件
  import HelloWorld from "./components/HelloWorld";

  export default {
    name: "App",
    components: { //映射組件
      HelloWorld
    }
  }
</script>

<style scoped>
  .logo {
    width : 300px;
    height: 300px;
  }
</style>
