<template>
  <pre>{{channel}}</pre>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    fetch ({ store, params }) {
  
    },
    computed: {
      ...mapGetters('channel', {
        channel: 'current'
      })
    }
  }
</script>
