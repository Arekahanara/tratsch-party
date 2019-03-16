<template>
  <div>
    <timeline :posts="posts" v-if="posts"/>
    <p v-else>No Posts found</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Timeline from '../components/Timeline'

export default {
  name: 'home',
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    async fetchData () {
      this.$store.commit('channel/setCurrent', null)
      await this.$store.dispatch('post/findByChannelSubscribed')
      await this.$store.dispatch('channel/find')
    }
  },
  components: {
    Timeline
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
