<template>
  <div class="col-md-8">
    <h3 class="reply">評論回復：</h3>
    <h2 v-if="comments.length===0">暫無評論，點擊左側添加評論！</h2>
    <ul class="list-group">
      <Item v-for="(comment, index) in comments" :key="index" :comment="comment"
            :index="index" :deleteComment="deleteComment"></Item>
    </ul>
  </div>
</template>

<script>
  import Item from './Item'

  export default {
    name: "List",
    props: {
      comments : Array,
      deleteComment : Function
    }, //聲明接收屬性，這個屬性就會成為組件物件的屬性
    components: {
      Item
    }
  }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }
</style>
