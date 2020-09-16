<template>
  <div>
    <input type="checkbox" v-model="isAllCheck" @change="changeCheck"/>
    已完成：{{completeSize}}/全部：{{todos.length}}
    <button class="btn btn-danger" @click="removeComplete" v-show="completeSize!=0">清除已完成todo</button>
  </div>
</template>

<script>
  export default {
    name: "TodoFooter",
    computed: {
      completeSize() {
        return this.todos.filter(todo => todo.complete == true).length
      },
      isAllCheck: {
        get() {
          return this.completeSize===this.todos.length && this.completeSize>0;
        },
        set(value) {
          this.selectAllTodos(value);
        }
      }
    },
    props: {
      todos: Array,
      deleteCompleteTodos: Function,
      selectAllTodos: Function
    },
    methods: {
      changeCheck() {
        this.selectAllTodos(this.check)
      },
      removeComplete() {
        this.deleteCompleteTodos();
      }
    }
  }
</script>

<style scoped>

</style>
