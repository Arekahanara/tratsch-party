<template>
  <div>
    <timeline :posts="posts" v-if="posts"/>
    <p v-else>No Posts found</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import timeline from '../components/timeline'

  export default {
    name: 'home',
    async fetch ({ store, params }) {
      store.commit('channel/setCurrent', null)
      await store.dispatch('post/findByChannelSubscribed')
      await store.dispatch('channel/find')
    },
    components: {
      timeline
    },
    computed: {
      ...mapGetters('post', {
        posts: 'findByChannelSubscribed'
      })
    }
  }
</script>

<style scoped>
  
</style>
