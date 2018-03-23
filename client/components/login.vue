<template>
  <section class="login d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email or username</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter here">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="...">
            </div>
          </form>
          <div class="login-box">
            <a href="#" class="btn btn-block btn-light">Register</a>
            <a href="#" class="btn btn-block btn-dark">Login</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .login {
    height: 100vh;
  }
</style>

<script>
  export default {
    name: 'layout-footer'
  }
</script>
