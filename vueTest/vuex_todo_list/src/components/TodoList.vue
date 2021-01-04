<template>
  <div>
    <ul>
      <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem";
  import {mapState} from "vuex";

  export default {
    name: "TodoList",
    computed : {
      ...mapState(['todos'])
    },
    components : {TodoItem}
  }
</script>

<style scoped>

</style>
