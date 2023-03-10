// Initializes the `comment` service on path `/comment`
const createService = require('feathers-mongoose')
const createModel = require('../../models/comment.model')
const hooks = require('./comment.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'comment',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/comment', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('comment')

  service.hooks(hooks)
}
