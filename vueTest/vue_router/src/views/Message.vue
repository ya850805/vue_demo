<template>
  <div>
      <span v-for="message in messages" :key="message.id">
        <a>{{message.title}}</a><br>
      </span>
  </div>
</template>

<script>
  export default {
    name: "Message",
    data() {
      return {
        messages: []
      }
    },
    mounted() {
      //模擬Ajax請求從後台處裡數據
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'message001'},
          {id: 3, title: 'message003'},
          {id: 5, title: 'message005'}
        ]
        this.messages = messages;
      }, 1000)
    }
  }
</script>

<style>

</style>
