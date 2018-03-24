import Vuex from 'vuex'
import feathersClient from '../api/feathers-client'
import feathersVuex, { initAuth } from 'feathers-vuex'

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

export default function () {
  return new Vuex.Store({
    state: {},
    actions: {
      async nuxtServerInit ({ commit, dispatch, state }, { req }) {
        await initAuth({
          commit,
          dispatch,
          req,
          moduleName: 'auth',
          cookieName: 'feathers-jwt'
        })

        if (state.auth.accessToken) {
          let { accessToken } = state.auth
          await dispatch('auth/authenticate', { strategy: 'jwt', accessToken })
        }
      },
      async nuxtClientInit ({ commit, dispatch, state }) {
        if (state.auth.accessToken) {
          let { accessToken } = state.auth
          await dispatch('auth/authenticate', { strategy: 'jwt', accessToken })
        }
      }
    },
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
          }
        },
        getters: {
          findByChannelId (state, { find }) {
            return (channelId) => find({ query: { channelId, $sort: { createdAt: -1 } } })
          }
        }
      }),
      service('media'),
      service('user'),
      auth({
        userService: 'user',
        state: {
          publicPages: [
            'login',
            'register',
            'index'
          ],
          fobiddenPagesOnAuth: [
            'login',
            'register'
          ]
        }
      })
    ]
  })
}
