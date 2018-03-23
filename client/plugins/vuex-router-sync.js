/*
  https://github.com/nuxt/nuxt.js/issues/240#issuecomment-326893386
*/
import { sync } from 'vuex-router-sync'

export default async (ctx) => {
  sync(ctx.store, ctx.app.router)
}
