<template>
  <div class="col-md-4">
    <form action="form-horizontal">
      <div class="form-group">
        <label>用戶名</label>
        <input type="text" class="form-control" placeholder="用戶名">
      </div>
      <div class="form-group">
        <label>評論內容</label>
        <textarea type="text" class="form-control" placeholder="評論內容"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Add"
  }
</script>

<style scoped>

</style>
