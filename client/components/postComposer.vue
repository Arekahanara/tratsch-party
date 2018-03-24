<template>
  <div>
    <input v-model="content" @keyup.enter="onSubmit" class="form-control"/>
  </div>
</template>

<style lang="scss" scoped>
</style>


<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'post-composer',
    data () {
      return {
        content: undefined,
        result: undefined
      }
    },
    computed: {
      ...mapGetters('channel', {
        channel: 'current'
      }),
      user () {
        return this.$store.state.auth.user
      }
    },
    methods: {
      ...mapActions('post', {
        createPost: 'create'
      }),
      async onSubmit () {
        const { content } = this
        await this.createPost({
          content,
          channelId: this.channel._id,
          userId: this.user._id
        })
      }
    }
  }
</script>
