<template>
  <div>
    <pre>{{channel}}</pre>
    <hr>
    <timeline :posts="posts"/>
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
        return this.findByChannelId(this.channel._id)
      }
    }
  }
</script>
