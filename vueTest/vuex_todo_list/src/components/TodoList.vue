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
  import storageUtil from "../util/storageUtil";

  export default {
    name: "TodoList",
    computed : {
      ...mapState(['todos'])
    },
    watch : { // 監視todos的所有變化
      todos : {
        deep : true,//深度監視
        handler : storageUtil.saveTodos
      }
    },
    components : {TodoItem}
  }
</script>

<style scoped>

</style>
