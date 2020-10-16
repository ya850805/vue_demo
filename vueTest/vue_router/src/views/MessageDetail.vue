<template>
  <div>
    <hr width="50%"/>
    <span>id : {{messageDetail.id}}</span><br>
    <span>title : {{messageDetail.title}}</span><br>
    <span>content : {{messageDetail.content}}</span><br>
  </div>
</template>

<script>
  const allMessageDetail = [
    {id: 1, title: 'message001', content: 'message1 content'},
    {id: 3, title: 'message003', content: 'message3 content'},
    {id: 5, title: 'message005', content: 'message5 content'}
  ]

  export default {
    name: "MessageDetail",
    data() {
      return {
        messageDetail: {}
      }
    },
    mounted() {
      const id = this.$route.params.id * 1; // 變為number
      this.messageDetail = allMessageDetail.find(msg => msg.id === id);
    },
    watch: {
      $route: function (value) {
        const id = value.params.id * 1;
        this.messageDetail = allMessageDetail.find(msg => msg.id === id);
      }
    }
  }
</script>

<style scoped>

</style>
