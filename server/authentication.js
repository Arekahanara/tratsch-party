const authentication = require('@feathersjs/authentication')
const jwt = require('@feathersjs/authentication-jwt')
const local = require('@feathersjs/authentication-local')
const oauth2 = require('@feathersjs/authentication-oauth2')
const GithubStrategy = require('passport-github')

module.exports = function (app) {
  const config = app.get('authentication')

  app.configure(authentication(config))
  app.configure(jwt())
  app.configure(local())

  app.configure(oauth2(Object.assign({
    name: 'github',
    Strategy: GithubStrategy
  }, config.github)))

  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  })
}
