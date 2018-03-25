<template>
  <div class="sidebar">
    <ul>
      <li>
        <a href="#">#HelloWorld</a>
      </li>
      <li>
        <a href="#">#DeineMama</a>
      </li>
      <li>
        <a href="#">#NewZealand</a>
      </li>
      <li>
        <a href="#">#ClickHere</a>
      </li>
    </ul>
    <hr>
    <ul>
      <li>
        <a href="#">Photos</a>
      </li>
      <li>
        <a href="#">Videos</a>
      </li>
      <li>
        <a href="#">Files</a>
      </li>
      <li>
        <a href="#">Maps</a>
      </li>
    </ul>
    <hr>
    <ul>
      <li>
        <a href="#">Settings</a>
      </li>
      <li>
        <a href="#">Privacy</a>
      </li>
      <li>
        <a href="#">Help</a>
      </li>
      <li>
        <a @click="logoutRedirect">Logout</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .sidebar {
    border: 1px solid $lgrey;
    background-color: #fff;
    padding: 10px 15px;

    ul {
      padding-left: 0;

      li {
        list-style-type: none;

        a {
          color: #000;
        }
      }
    }
  }
</style>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'layout-sidebar',
    methods: {
      ...mapActions('auth', ['logout']),
      logoutRedirect () {
        this.logout().then(() => this.$router.push('/login'))
      }
    }
  }
</script>
