<template>
  <div>
    <div v-for="post in posts" :key="post._id">
      <post :post="post"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>


<script>
  import post from './post'
  export default {
    name: 'timeline',
    components: {
      post
    },
    props: ['posts']
  }
</script>
