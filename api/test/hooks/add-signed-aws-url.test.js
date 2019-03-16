const assert = require('assert');
const addSignedAwsUrl = require('../../server/hooks/add-signed-aws-url');

describe('\'add-signed-aws-url\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = addSignedAwsUrl();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
