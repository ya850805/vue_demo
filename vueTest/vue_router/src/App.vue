<template>
  <div id="app">
    <h2>Vue router</h2>
    <img src="./assets/logo.png">

    <div>
      <span style="width: 30%;">
        <router-link to="/about">About</router-link>
        <router-link to="/home">Home</router-link>
      </span>
      <hr>
      <span style="width: 70%;">
        <h3>Router-view area</h3>
        <router-view />
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
