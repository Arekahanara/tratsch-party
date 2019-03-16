import Vue from 'vue'

import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathers from './api'

const { service, auth, FeathersVuex } = feathersVuex(feathers, { idField: '_id' })

Vue.use(Vuex)
Vue.use(FeathersVuex)

export default new Vuex.Store({
  plugins: [
    service('channel', {
      actions: {
        async getBySlug ({ dispatch }, slug) {
          const channels = await dispatch('find', { query: { slug } })
          if (!channels.data[0]) return
          return dispatch('get', channels.data[0]._id)
        }
      }
    }),
    service('post', {
      actions: {
        findByChannelId ({ dispatch }, channelId) {
          return dispatch('find', { query: { channelId, $sort: { createdAt: -1 } } })
        },
        findByChannelSubscribed ({ dispatch, commit }) {
          return dispatch('find', { query: { $sort: { createdAt: -1 } } })
        }
      },
      getters: {
        findByChannelId (state, { find }) {
          return (channelId) => find({ query: { channelId, $sort: { createdAt: -1 } } })
        },
        findByChannelSubscribed (state, { find }) {
          return find({ query: { $sort: { createdAt: -1 } } })
        }
      }
    }),
    service('media'),
    service('user'),
    auth({ userService: 'user' })
  ]
})
