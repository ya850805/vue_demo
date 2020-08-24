<template>
  <div>
    <!--    上半部-->
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2>vue實作發表評論</h2>
          </div>
        </div>
      </div>
    </header>
    <!--    下半部-->
    <div class="container row">
      <Add/>
      <List :comments="comments"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'

  export default {
    name: "App",
    components: {
      Add, List
    },
    data() {
      return {
        comments: [
          {name: 'BOB', content: 'Hello!'},
          {name: 'Anne', content: 'Hello!!'},
          {name: 'John', content: 'Hello!!!'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
