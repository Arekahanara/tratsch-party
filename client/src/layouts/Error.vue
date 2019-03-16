<template>
  <section class="container">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <router-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </router-link>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
  .title {
    margin-top: 15px;
    font-size: 5em;
  }
  .info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
  } .button
  {
    margin-top: 50px;
  }
</style>
