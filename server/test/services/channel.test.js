const assert = require('assert')
const app = require('../../app')

describe('\'channel\' service', () => {
  it('registered the service', () => {
    const service = app.service('channel')

    assert.ok(service, 'Registered the service')
  })
})
