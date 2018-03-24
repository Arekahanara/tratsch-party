export default async function (context) {
  const { store, params } = context
  const { slug } = params
  if (slug) await store.dispatch('channel/getBySlug', slug)
}
