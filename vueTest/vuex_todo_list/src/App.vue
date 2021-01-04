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
  import PubSub from 'pubsub-js';

  import TodoHeader from "./components/TodoHeader";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";
  import storageUtil from "./util/storageUtil"

  export default {
    name: 'App',
    components: {TodoHeader, TodoList, TodoFooter},
    mounted() {
      //訂閱消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index);
      })
    },
    methods: {
    },
    // watch : {//監視
    //   todos : {
    //     deep : true, //深度監視
    //     handler : function (newValue) {
    //       //將最新的值(newValue)保存到localStorage
    //       storageUtil.saveTodos(newValue)
    //     }
    //   }
    // }
  }
</script>

<style>
</style>
