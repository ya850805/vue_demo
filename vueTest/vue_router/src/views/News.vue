<template>
  <div>
      <span v-for="(news, index) in newsArr" :key="index">{{news}}<br></span>
  </div>
</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        newsArr : [
          "news01","news03","news05"
        ]
      }
    }
  }
</script>

<style>

</style>
