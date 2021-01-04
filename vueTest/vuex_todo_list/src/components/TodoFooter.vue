<template>
  <div>
    <input type="checkbox" v-model="isAllCheck"/>
    已完成：{{completeCount}}/全部：{{totalCount}}
    <button class="btn btn-danger" @click="clearAllCompleted" v-show="completeCount">清除已完成todo</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  export default {
    name: "TodoFooter",
    computed: {
      ...mapGetters(['totalCount', 'completeCount']),
      isAllCheck : {
        get () {
          return this.$store.getters.isAllSelect
        },
        set (value) {
          this.$store.dispatch('selectAllTodos', value)
        }
      }
    },
    methods: {
      ...mapActions(['clearAllCompleted'])
    }
  }
</script>

<style scoped>

</style>
