<template>
  <div>
    <post-composer/>
    <div v-for="post in posts.data" :key="post._id">
      <post :post="post"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

</style>


<script>
  import post from './post'
  import postComposer from './postComposer'

  export default {
    name: 'timeline',
    components: {
      post,
      postComposer
    },
    props: ['posts']
  }
</script>
