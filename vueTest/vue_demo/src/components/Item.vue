<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem(comment.name)">刪除</a>
    </div>
    <p class="user"><span>{{comment.name}}</span><span>說:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
  export default {
    name: "Item",
    props : { //指定屬性名和屬性值
      comment : Object,
      deleteComment : Function,
      index : Number
    },
    methods : {
      deleteItem (name) {
        if(window.confirm(`確定刪除${name}的評論？`)){
          this.deleteComment(this.index)
        }
      }
    }
  }
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
