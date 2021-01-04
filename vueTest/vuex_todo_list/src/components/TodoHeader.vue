<template>
  <div>
    <input type="text" class="form-control" placeholder="添加todo" v-model="title" @keyup.enter="addItem"/>
  </div>
</template>

<script>
  export default {
    name: "TodoHeader",
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

        const todo = {
          title : this.title,
          complete : false
        }
        //2. 根據輸入添加資料
        this.$store.dispatch('addTodo', todo);

        //3. 清除輸入
        this.title = '';
      }
    }
  }
</script>

<style scoped>

</style>
