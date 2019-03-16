<template>
  <section class="login d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="onSubmit">
            <div class="alert alert-danger" v-if="error">
              {{error.message}}
              <button type="button" class="close" data-dismiss="alert" @click.prevent="dismissError" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp" placeholder="Enter here">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="...">
            </div>
            <div class="login-box">
              <router-link to="/register" class="btn btn-block btn-lgrey">Register</router-link>
              <button type="submit" class="btn btn-block btn-dark">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";

  .login {
    height: 100vh;
  }
</style>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      email: undefined,
      password: undefined,
      error: undefined
    }
  },
  methods: {
    dismissError () {
      this.error = undefined
      this.clearAuthenticateError()
    },

    onSubmit () {
      console.log('login')
      const { email, password } = this
      this.authenticate({ strategy: 'local', email, password })
      // Just use the returned error instead of mapping it from the store.
        .then(() => {
          return this.$router.push('/')
        })
        .catch(error => {
          // Convert the error to a plain object and add a message.
          let type = error.className
          console.log(error)
          error = Object.assign({}, error)
          error.message = (type === 'not-authenticated')
            ? 'Incorrect email or password.'
            : 'An error prevented login.'
          this.error = error
        })
    },
    ...mapMutations('auth', {
      clearAuthenticateError: 'clearAuthenticateError'
    }),
    ...mapActions('auth', ['authenticate'])
  }
}
</script>
