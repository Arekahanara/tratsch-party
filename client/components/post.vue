<template>
  <div>
    <pre>{{post}}</pre>
    <p>{{post.content}}</p>
  </div>
</template>

<style lang="scss" scoped>
</style>


<script>
  export default {
    name: 'post',
    props: ['post']
  }
</script>
