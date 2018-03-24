<template>
  <div>
    <timeline :posts="posts" v-if="posts"/>
    <p v-else>No Posts found</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import timeline from '../../components/timeline'

  export default {
    async fetch ({ store, params }) {
      await store.dispatch('post/findByChannelId', store.getters['channel/current'])
    },
    components: {
      timeline
    },
    computed: {
      ...mapGetters('channel', {
        channel: 'current'
      }),
      ...mapGetters('post', {
        findByChannelId: 'findByChannelId'
      }),
      posts () {
        return this.channel ? this.findByChannelId(this.channel._id) : null
      }
    }
  }
</script>
