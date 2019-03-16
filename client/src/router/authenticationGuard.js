import store from '@/store/'
const publicPages = ['/login', '/register']

export default async function authenticationGuard (to, from, next) {
  const { auth } = store.state
  const isLoggedIn = !!auth.user

  if (isLoggedIn) {
    return next()
  }

  try {
    await store.dispatch('auth/authenticate')
    next()
  } catch (exception) {
    let toPublicPage = publicPages.includes(to.path)
    if (toPublicPage) return next()
    console.error(exception)
    return next({ path: '/login', query: { redirect: to.path } })
  }
}
