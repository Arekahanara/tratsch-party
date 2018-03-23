const app = require('../app')
const channelService = app.service('channel')
const postService = app.service('post')

async function main () {
  const channel = (await channelService.find({
    query: {
      slug: 'mawa'
    }
  })).data[0]

  const posts = await postService.create([
    {
      channelId: channel._id,
      content: 'lorem ipsum'
    }
  ])

  return {
    channel,
    posts
  }
}

main()
  .then(console.log)
  .catch(console.error)
