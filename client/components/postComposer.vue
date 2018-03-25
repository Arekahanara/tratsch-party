<template>
  <div>
    <vue-dropzone ref="postDropzone" id="dropzone" @vdropzone-success="addFileToPost" :options="dropzoneOptions"/>
    <textarea v-model="post.content" class="form-control" placeholder="What's on your mind?"></textarea>
    <button class="btn btn-block btn-lgrey" @click="onSubmit">Post</button>
    <hr class="my-3">
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  textarea {
    position: relative;
    border-radius: 0;
    border: 1px solid $lgrey;
    height: 135px;
    resize: none;
    z-index: 1;
  }
</style>


<script>
  import { mapActions, mapGetters } from 'vuex'
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.css'

  export default {
    name: 'post-composer',
    components: {
      vueDropzone: vue2Dropzone
    },
    data () {
      return {
        post: {
          content: undefined,
          mediaIds: []
        },
        result: undefined,
        dropzoneOptions: {
          maxFilesize: 15,
          autoProcessQueue: true,
          url: '/api/upload'
        }
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
      addFileToPost (file, response) {
        this.post.mediaIds.push(...response.map(item => item._id))
      },
      async uploadFiles () {
        await this.$refs.postDropzone.processQueue()
      },
      async onSubmit () {
        await this.uploadFiles()
        const post = await this.createPost({
          ...this.post,
          channelId: this.channel._id,
          userId: this.user._id
        })

        for (let mediaId of this.post.mediaIds) {
          await this.$store.dispatch('media/patch', [mediaId, { postId: post._id }])
        }

        this.$store.dispatch('post/get', post._id)

        this.post = {
          content: undefined,
          mediaIds: []
        }

        this.$refs.postDropzone.removeAllFiles()
      }
    }
  }
</script>
