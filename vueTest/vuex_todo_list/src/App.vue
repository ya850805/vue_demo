<template>
  <div id="app">
    <div class="container">
      <todo-header/>
      <todo-list/>
      <todo-footer/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from "./components/TodoHeader";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";

  export default {
    name: 'App',
    components: {TodoHeader, TodoList, TodoFooter},
    mounted() {
      //異步獲取todos數據
      this.$store.dispatch('reqTodos');
    }
  }
</script>

<style>
</style>
