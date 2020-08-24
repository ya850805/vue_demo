<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default { //配置對象(與之前寫的Vue一致)
    name: "HelloWorld",
    data () { //data在這必須為函數的寫法
      return {
        msg : 'Hello Vue'
      }
    }
  }
</script>

<style scoped>
  .msg {
    color: red;
    font-size: 30px;
    font-weight: bold;
  }
</style>
