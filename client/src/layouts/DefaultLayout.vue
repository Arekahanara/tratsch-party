<template>
  <div class="wrapper">
    <layout-header/>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <slot>
              <router-view />
            </slot>
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
  @import "../assets/scss/variables";

  main {
    padding: 75px 0;
  }
</style>

<script>
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutSidebar from '@/components/LayoutSidebar.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'

export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    LayoutFooter
  }
}
</script>
