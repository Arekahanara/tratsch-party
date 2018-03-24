<template>
  <nav class="fixed-top">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-3">
          <a href="#">[x]</a>
        </div>
        <div class="col-6 text-center">
          <div class="brand">
            <a href="#">Test-Channel</a>
          </div>
        </div>
        <div class="col-3">
          <a href="#">[x]</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    background-color: #fff;
    border-bottom: 1px solid #ced4da;
    height: 50px;
  }
</style>

<script>
  export default {
    name: 'layout-header'
  }
</script>
