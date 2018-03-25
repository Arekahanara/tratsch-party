<template>
  <div class="sidebar">
    <ul>
      <li>
        <a href="#"><i class="fa fa-hashtag" aria-hidden="true"></i> HelloWorld</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-hashtag" aria-hidden="true"></i> DeineMama</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-hashtag" aria-hidden="true"></i> NewZealand</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-hashtag" aria-hidden="true"></i> ClickHere</a>
      </li>
    </ul>
    <hr>
    <ul>
      <li>
        <a href="#"><i class="fa fa-camera" aria-hidden="true"></i> Photos</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-video-camera" aria-hidden="true"></i> Videos</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-file-text" aria-hidden="true"></i> Files</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-globe" aria-hidden="true"></i> Maps</a>
      </li>
    </ul>
    <hr>
    <ul>
      <li>
        <a href="#"><i class="fa fa-cog" aria-hidden="true"></i> Settings</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-lock" aria-hidden="true"></i> Privacy</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
      </li>
      <li>
        <a @click="logoutRedirect"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
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
