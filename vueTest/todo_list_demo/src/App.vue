<template>
  <div id="app">
    <div class="container">
      <todo-header :addTodo="addTodo"/>
      <todo-list :todos="todos"/>
      <todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
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
    data() {
      return {
        //從localStorage讀取todos
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
    },
    mounted() {
      //訂閱消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index);
      })
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo);
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      },
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => todo.complete==false)
      },
      selectAllTodos (check) {
        if(check){
          this.todos.map(todo => todo.complete=true);
        } else {
          this.todos.map(todo => todo.complete=false);
        }
      }
    },
    watch : {//監視
      todos : {
        deep : true, //深度監視
        handler : function (newValue) {
          //將最新的值(newValue)保存到localStorage
          storageUtil.saveTodos(newValue)
        }
      }
    }
  }
</script>

<style>
</style>
