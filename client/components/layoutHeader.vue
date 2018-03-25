<template>
  <nav class="fixed-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-3">
          <div class="left-nav">
            <nuxt-link to="/"><i class="fa fa-home" aria-hidden="true"></i></nuxt-link>
          </div>
        </div>
        <div class="col-6">
          <div class="brand d-flex justify-content-center align-items-center">
            <span v-if="channel">
              <b-dropdown id="ddown1" :text="channel.name" class="m-md-2">
                <b-dropdown-header>Channels</b-dropdown-header>
                <b-dropdown-item v-for="item in channels" :key="item._id" to="/mawa" :active="false">{{item.name}}</b-dropdown-item>
                <b-dropdown-divider v-if="channels.length > 0"></b-dropdown-divider>
                <b-dropdown-item @click="addChannel">Add Channel</b-dropdown-item>
              </b-dropdown>
            </span>
            <span v-else>
              <b-dropdown id="ddown1" text="Tratsch.Party" class="m-md-2" v-if="channels">
                <b-dropdown-header>Channels</b-dropdown-header>
                <b-dropdown-item v-for="item in channels" :key="item._id" :to="{ name: 'slug', params: { slug: item.slug }}">{{item.name}}</b-dropdown-item>
              </b-dropdown>
            </span>
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
        channel: 'current',
        channels: 'list'
      })
    },
    methods: {
      addChannel () {
        let name = prompt('Neuer Channel name')
        this.$store.dispatch('channel/create', {
          name,
          slug: name.replace(/ /g, '-')
        })
      }
    }
  }
</script>
