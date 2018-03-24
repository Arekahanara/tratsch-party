const { authenticate } = require('@feathersjs/authentication').hooks
const { fastJoin } = require('feathers-hooks-common')

module.exports = function (app) {
  const userService = app.service('user')

  const postResolvers = {
    joins: {
      user: (...args) => async post => {
        post.user = (await userService.find({
          query: {
            _id: post.userId
          },
          paginate: false
        }))[0]
        return post
      }
    }
  }

  return {
    before: {
      all: [],
      find: [],
      get: [],
      create: [ authenticate('jwt') ],
      update: [ authenticate('jwt') ],
      patch: [ authenticate('jwt') ],
      remove: [ authenticate('jwt') ]
    },

    after: {
      all: [ fastJoin(postResolvers) ],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: []
    },

    error: {
      all: [],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: []
    }
  }
}