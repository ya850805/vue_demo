<template>
  <div>
    <div v-if="firstView">
      Please enter the search keywords.
    </div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="users!=null">
      <div v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" width="30px" height="30px"/>
        </a>
        <span>{{user.name}}</span>
      </div>
    </div>
    <div v-if="errorMsg">
      {{errorMsg}}
    </div>

  </div>
</template>

<script>
  import PubSub from 'pubsub-js';
  import axios from 'axios';

  export default {
    name: "Main",
    data() {
      return {
        firstView: true,
        loading: false,
        users: null,
        errorMsg: ''
      }
    },
    mounted() {
      //訂閱
      PubSub.subscribe('search', (msg, searchName) => {
        //發AJAX請求進行搜索
        const url = `https://api.github.com/search/users?q=${searchName}`;

        //更新狀態(請求中)
        this.firstView = false;
        this.loading = true;
        this.users = null;
        this.errorMsg = '';

        //發AJAX請求
        axios.get(url)
          .then((response) => {
            this.loading = false;
            const result = response.data;
            this.users = result.items.map(item => ({
              url : item.html_url,
              avatar_url : item.avatar_url,
              name : item.login
            }));
          })
          .catch((response) => {
            this.loading = false;
            this.errorMsg = 'AJAX failed...'
          })
      })
    }
  }
</script>

<style scoped>

</style>
