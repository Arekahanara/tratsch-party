const createService = require('feathers-mongoose')
const createModel = require('../../models/user.model')
const hooks = require('./user.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'user',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/user', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user')

  service.hooks(hooks)
}
