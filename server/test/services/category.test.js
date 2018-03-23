const assert = require('assert')
const app = require('../../app')

describe('\'category\' service', () => {
  it('registered the service', () => {
    const service = app.service('category')

    assert.ok(service, 'Registered the service')
  })
})
