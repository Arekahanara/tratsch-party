<template>
  <div class="wrapper">
    <layout-header/>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <nuxt/>
          </div>
          <div class="col-md-4">
            <layout-sidebar/>
          </div>
        </div>
      </div>
    </main>
    <layout-footer/>
  </div>
</template>

<style lang="scss" scoped>
  main {
    padding: 75px 0;
    background-color: #fafafa;
  }
</style>

<script>
  import layoutHeader from '../components/layoutHeader.vue'
  import layoutSidebar from '../components/layoutSidebar.vue'
  import layoutFooter from '../components/layoutFooter.vue'

  export default {
    components: {
      layoutHeader,
      layoutSidebar,
      layoutFooter
    }
  }
</script>
