<template>
  <div class="col-md-4">
    <form action="form-horizontal">
      <div class="form-group">
        <label>用戶名</label>
        <input type="text" class="form-control" placeholder="用戶名" v-model="name">
      </div>
      <div class="form-group">
        <label>評論內容</label>
        <textarea type="text" class="form-control" placeholder="評論內容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Add",
    props : {
      addComment : { //指定屬性名/屬性值的類型/必要性
        type : Function,
        required: true
      }
    },
    data() {
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      add() {
        //檢查輸入的合法性
        const name = this.name.trim();
        const content = this.content.trim();
        if (!name || !content) {
          alert("姓名或內容不得為空");
          return;
        }

        //根據輸入的數據，封裝成一個comment物件
        const comment = {name, content};

        //添加到comments中
        this.addComment(comment);

        //清除輸入框
        this.name = "";
        this.content = "";
      }
    }
  }
</script>

<style scoped>

</style>
