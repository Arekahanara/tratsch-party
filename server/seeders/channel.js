const app = require('../app')
const channelService = app.service('channel')

async function main () {
  const channel = await channelService.create({
    name: 'mawa',
    slug: 'mawa'
  })
  return {
    channel
  }
}

main()
  .then(console.log)
  .catch(console.error)
