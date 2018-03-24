const { authenticate } = require('@feathersjs/authentication').hooks
const { fastJoin } = require('feathers-hooks-common')

module.exports = function (app) {
  const postResolvers = {
    joins: {
      user: (...args) => async post => {
        post.user = (await app.service('user').find({
          query: {
            _id: post.userId
          },
          paginate: false
        }))[0]
        return post
      },
      medias: (...args) => async post => {
        post.medias = (await app.service('media').find({
          query: {
            postId: post._id
          },
          paginate: false
        }))
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