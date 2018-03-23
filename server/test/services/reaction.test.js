const assert = require('assert')
const app = require('../../app')

describe('\'reaction\' service', () => {
  it('registered the service', () => {
    const service = app.service('reaction')

    assert.ok(service, 'Registered the service')
  })
})
