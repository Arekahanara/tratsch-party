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

  const queryChannelBySlug = slug => ({
    query: { slug }
  })

  const queryPostByChannelId = channelId => ({
    query: { channelId }
  })

  export default {
    async fetch ({ store, params }) {
      const { slug } = params
      const channels = await store.dispatch('channel/find', queryChannelBySlug(slug))
      const currentChannel = channels.data[0]._id
      await store.dispatch('post/find', queryPostByChannelId(currentChannel))
    },
    components: {
      timeline
    },
    computed: {
      ...mapGetters('channel', {
        channelFind: 'find'
      }),
      ...mapGetters('post', {
        postFind: 'find'
      }),
      channel () {
        let { slug } = this.$route.params
        return this.channelFind(queryChannelBySlug(slug)).data[0]
      },
      posts () {
        return this.postFind(queryPostByChannelId(this.channel._id)).data
      }
    }
  }
</script>
