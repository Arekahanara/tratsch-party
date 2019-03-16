const assert = require('assert')
const app = require('../../app')

describe('\'comment\' service', () => {
  it('registered the service', () => {
    const service = app.service('comment')

    assert.ok(service, 'Registered the service')
  })
})
