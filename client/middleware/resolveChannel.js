export default async function (context) {
  const { store, params } = context
  const { slug } = params
  await store.dispatch('channel/getBySlug', slug)
}
