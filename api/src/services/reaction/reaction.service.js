// Initializes the `reaction` service on path `/reaction`
const createService = require('feathers-mongoose')
const createModel = require('../../models/reaction.model')
const hooks = require('./reaction.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'reaction',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/reaction', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('reaction')

  service.hooks(hooks)
}
