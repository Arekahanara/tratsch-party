module.exports = async function (app) {
  const channelService = app.service('channel')
  const channels = await channelService.find({query: {$limit: 0}});
  if (channels.total === 0) {
    await channelService.create({
      name: 'mawa',
      slug: 'mawa'
    })
  }
}
