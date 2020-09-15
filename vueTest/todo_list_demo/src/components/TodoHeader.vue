<template>
  <div>
    <input type="text" class="form-control" placeholder="添加todo" v-model="title" @keyup.enter="addItem"/>
  </div>
</template>

<script>
  export default {
    name: "TodoHeader",
    props : {
      addTodo : Function
    },
    data () {
      return {
        title : ''
      }
    },
    methods : {
      addItem () {
        //1. 檢查輸入合法性
        const title = this.title.trim();
        if(!title) {
          alert('必須輸入todo')
          return;
        }
        //2. 根據輸入添加資料
        this.addTodo({title : title, complete : false})

        //3. 清除輸入
        this.title = '';
      }
    }
  }
</script>

<style scoped>

</style>
