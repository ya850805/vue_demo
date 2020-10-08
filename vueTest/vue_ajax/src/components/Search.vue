<template>
  <div>
    <input type="text" v-model="searchName"/>
    <button @click="search">Search</button>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js';

  export default {
    name: "Search",
    data() {
      return {
        searchName: ''
      }
    },
    methods: {
      search() {
        const searchName = this.searchName.trim();
        if (searchName) {
          //發布
          PubSub.publish('search', searchName);
        } else {
          alert('Please enter search keywords.')
        }
      }
    }
  }
</script>

<style scoped>

</style>
