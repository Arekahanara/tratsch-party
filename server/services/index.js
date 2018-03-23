const channel = require('./channel/channel.service.js')
const user = require('./user/user.service.js')

module.exports = function (app) {
  app.configure(channel)
  app.configure(user)
}
