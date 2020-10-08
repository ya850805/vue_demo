<template>
  <div>
    <ul>
      <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem";

  export default {
    name: "TodoList",
    props : {
      todos : Array,
    },
    components : {TodoItem}
  }
</script>

<style scoped>

</style>
