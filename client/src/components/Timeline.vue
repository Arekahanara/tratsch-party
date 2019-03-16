<template>
  <div>
    <post-composer/>
    <div v-for="post in posts.data" :key="post._id">
      <post :post="post"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";

</style>

<script>
import Post from '@/components/Post'
import PostComposer from '@/components/PostComposer'

export default {
  name: 'timeline',
  components: {
    Post,
    PostComposer
  },
  props: ['posts']
}
</script>
