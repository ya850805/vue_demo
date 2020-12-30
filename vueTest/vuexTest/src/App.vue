<template>
  <div>
    <p>click {{$store.state.count}} times, count is {{isEven}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
  //mapGetters()返回值為物件
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    name: 'App',
    computed: {
      ...mapState(['count']),
      ...mapGetters(['isEven'])
    },

    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }

    // methods: {
    //   increment() {
    //     this.$store.dispatch('increment'); //觸發store中的action調用
    //   },
    //   decrement() {
    //     this.$store.dispatch('decrement');
    //   },
    //   incrementIfOdd() {
    //     this.$store.dispatch('incrementIfOdd');
    //   },
    //   incrementAsync() {
    //     this.$store.dispatch('incrementAsync');
    //   }
    // }
  }
</script>

<style>
</style>
