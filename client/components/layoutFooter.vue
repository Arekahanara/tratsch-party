<template>
  <footer class="bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <form>
            <input class="form-control" placeholder="Search" aria-label="Search" type="text">
            <button class="btn" type="submit">Search</button>
          </form>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ced4da;

    form {
      position: relative;
      padding: 5px 0;

      input {
        width: 100%;
        padding: 5px 80px 5px 10px;
      }

      .btn {
        position: absolute;
        right: -1px;
        top: 50%;
        transform: translate(0,-50%);
        padding: 5px 10px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border: 0;
      }
    }
  }
</style>

<script>
  export default {
    name: 'layout-footer'
  }
</script>
