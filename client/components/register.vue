<template>
  <section class="register">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="row intro">
            <div class="col">
              <h1>Registration</h1>
              <h3>Feel free to be a part of something new!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aspernatur necessitatibus atque reprehenderit quibusdam nesciunt et doloribus, saepe non inventore quasi error magni natus incidunt illo. Minus repudiandae illum vero.</p>
            </div>
          </div>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter here">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Username</label>
              <input type="username" class="form-control" id="exampleInputusername1" placeholder="...">
              <small id="usernamelHelp" class="form-text text-muted">Feel free to use a pseudonym.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="...">
              <small id="upasswordHelp" class="form-text text-muted">Create a password at least 6 characters long.</small>
            </div>
          </form>
          <div class="row text-divider justify-content-center align-items-center">
            <div class="col">
              <div class="line"></div>
            </div>
            <div class="col">
              <div class="text text-center">or</div>
            </div>
            <div class="col">
              <div class="line"></div>
            </div>
          </div>
          <div class="facebook">
            <a href="#" class="btn btn-block btn-fb">Login with Facebook</a>
          </div>
          <div class="login-box">
            <p>By signing up, you agree to our Terms & Privacy Policy.</p>
            <nuxt-link to="/login" class="btn btn-block btn-light">Login</nuxt-link>
            <a href="#" class="btn btn-block btn-dark">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .register {
    height: 100vh;
    padding: 25px 0;
  }
  .text-divider {
    margin-bottom: 10px;
    .line {
      height: 1px;
      background-color: #c7c7c7;
    }
    .text {
      text-transform: uppercase;
    }
  }
  .facebook {
    margin-bottom: 10px;
  }
</style>

<script>
  export default {
    name: 'layout-footer'
  }
</script>
