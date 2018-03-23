const channel = require('./channel/channel.service.js')
const user = require('./user/user.service.js')

const post = require('./post/post.service.js')

const comment = require('./comment/comment.service.js')

const category = require('./category/category.service.js')

const reaction = require('./reaction/reaction.service.js')

module.exports = function (app) {
  app.configure(channel)
  app.configure(user)
  app.configure(post)
  app.configure(comment)
  app.configure(category)
  app.configure(reaction)
}
