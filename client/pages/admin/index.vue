<template>
  <div>
    <pre>{{pagination}}</pre>
    <pre>{{messages}}</pre>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'chat-app',
  computed: {
    ...mapState('messages', {
      pagination: state => state.pagination['mainListView']
    }),
    ...mapGetters('messages', {
      getMessageFromStore: 'get'
    }),
    messages () {
      const { getMessageFromStore, pagination } = this

      if (pagination) {
        return pagination
          .ids
          .map(id => getMessageFromStore(id))
      }

      return []
    }
  },
  methods: {
    ...mapActions('messages', {
      findMessages: 'find'
    })
  },
  created () {
    this.findMessages({
      query: {
        $sort: {createdAt: -1},
        $limit: 5
      },
      qid: 'mainListView'
    })
  }
}
</script>