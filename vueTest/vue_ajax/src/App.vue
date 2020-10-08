<template>
  <div>
    <h1>Search the most star repository</h1>
    <div v-show="!repoName">
      <h2>Loading...</h2>
    </div>
    <div v-show="repoName">
      <h2>
        The most star repository in GitHub query with "{{queryString}}" is <a :href="repoUrl">{{repoName}}</a>
      </h2>
    </div>

    <hr>

    <h1>Search people on GitHub</h1>
    <Search />
    <UsersMain />
  </div>

</template>

<script>
  import Search from "./components/Search";
  import Main from './components/Main';

  import axios from "axios";

  export default {
    components : {
      Search,
      UsersMain : Main
    },
    data () {
      return {
        queryString : 'v',
        repoUrl : '',
        repoName : ''
      }
    },
    mounted() {
      //發AJAX請求獲取新數據
      const url = `https://api.github.com/search/repositories?q=${this.queryString}&sort=stars`;

      axios.get(url)
        .then(response => {
          const result = response.data;
          const mostStarRepo = result.items[0];
          this.repoName = mostStarRepo.name;
          this.repoUrl = mostStarRepo.html_url;
        })
        .catch(response => {
          alert('AJAX failed...')
        })
    }
  }
</script>

<style>
</style>
