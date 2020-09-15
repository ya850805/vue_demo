<template>
  <div :style="{backgroundColor : bgColor}">
    <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
      <button class="btn btn-danger" v-show="isShow" @click="deleteItem">刪除</button>
    </li>
  </div>
</template>

<script>
  export default {
    name: "TodoItem",
    props: {
      todo: Object,
      index: Number,
      deleteTodo :Function
    },
    data() {
      return {
        bgColor: 'white', //默認的背景顏色
        isShow: false //按鈕默認是否顯示
      }
    },
    methods: {
      handleEnter(isEnter) {
        if (isEnter) {
          this.bgColor = '#aaaaaa';
          this.isShow = true;
        } else {
          this.bgColor = 'white';
          this.isShow = false;
        }
      },
      deleteItem () {
        const {todo, index, deleteTodo} = this;
        if(window.confirm(`確認刪除${todo.title}???`)){
          deleteTodo(index)
        }
      }
    }
  }
</script>

<style scoped>

</style>
