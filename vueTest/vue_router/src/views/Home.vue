<template>
    <div>
      <h3>Home</h3>
      <div>
        <router-link to="/home/news">news</router-link>
        <router-link to="/home/message">message</router-link>
      </div>
      <div>
        <router-view />
      </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
