module.exports = async function (app) {
  const channelService = app.service('channel')
  const postService = app.service('post')
  const posts = await postService.find({query: {$limit: 0}});
  if (posts.total === 0) {
    const [channel] = await channelService.find({
      query: {
        slug: 'mawa'
      },
      paginate: false
    })

    await postService.create(
      {
        channelId: channel._id,
        content: 'lorem ipsum'
      }
    )
  }
}