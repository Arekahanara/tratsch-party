<template>
  <nav class="fixed-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-3">
          <div class="left-nav">
            <a href="#">
              <i class="fa fa-home" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-6">
          <div class="brand d-flex justify-content-center align-items-center">
            <span v-if="channel">{{channel.name}}</span>
            <span v-else>Plauder.Party</span>
          </div>
        </div>
        <div class="col-3">
          <div class="right-nav">
            <a href="#">
              <i class="fa fa-bell" aria-hidden="true"></i>
            </a>
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
  import { mapGetters } from 'vuex'

  export default {
    name: 'layout-header',
    computed: {
      ...mapGetters('channel', {
        channel: 'current'
      })
    }
  }
</script>
