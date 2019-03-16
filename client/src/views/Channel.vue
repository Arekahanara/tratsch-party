<template>
  <div>
    <timeline :posts="posts" v-if="posts"/>
    <p v-else>No Posts found</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Timeline from '@/components/Timeline'

export default {
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    async fetchData () {
      await this.$store.dispatch('channel/getBySlug', this.$route.params.channelSlug)
      await this.$store.dispatch('post/findByChannelId', this.$store.getters['channel/current'])
      await this.$store.dispatch('channel/find')
    }
  },
  components: {
    Timeline
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
