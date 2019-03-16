<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <form>
            <input class="form-control" placeholder="Search..." aria-label="Search" type="text">
            <button type="submit">Search</button>
          </form>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border-top: 1px solid $lgrey;

    form {
      position: relative;
      padding: 5px 0;

      input {
        width: 100%;
        padding: 5px 80px 5px 10px;
        background-color: $lgrey;
      }

      button {
        position: absolute;
        right: 1px;
        top: 50%;
        transform: translate(0,-50%);
        padding: 5px 10px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border: 0;
        background-color: $lgrey;
      }
    }
  }
</style>

<script>
export default {
  name: 'layout-footer'
}
</script>
