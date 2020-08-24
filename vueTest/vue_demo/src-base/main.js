/*
* 入口JS：創建Vue實例
* */
import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
