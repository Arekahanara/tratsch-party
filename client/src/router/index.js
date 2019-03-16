import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/views/Timeline.vue'
import Channel from '@/views/Channel.vue'
import Post from '@/views/Post.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

import authenticationGuard from './authenticationGuard.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        layout: 'login'
      },
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'login'
      },
      component: Login
    },
    {
      path: '/:channelSlug/:postId',
      name: 'post',
      component: Post
    },
    {
      path: '/:channelSlug',
      name: 'channel',
      component: Channel
    }
  ]
})

router.beforeEach(authenticationGuard)
export default router
