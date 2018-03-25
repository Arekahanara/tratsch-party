<template>
  <nav class="fixed-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-3">
          <div class="left-nav">
            <a href="#">[x]</a>
          </div>
        </div>
        <div class="col-6">
          <div class="brand d-flex justify-content-center align-items-center">
            <a href="#">Test-Channel</a>
          </div>
        </div>
        <div class="col-3">
          <div class="right-nav">
            <a href="#">[x]</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  nav {
    background-color: #fff;
    border-bottom: 1px solid $lgrey;

    a {
      color: #000;
    }

    .brand {
      height: 50px;

      img {
        height: 40px;
      }
    }

    .right-nav {
      text-align: right;
    }
  }
</style>

<script>
  export default {
    name: 'layout-header'
  }
</script>
