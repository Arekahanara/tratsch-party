const AWS = require('aws-sdk')

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async function addSignedAwsUrl (hook) {
    const { app, data } = hook
    const { accessKeyId, secretAccessKey } = app.get('aws')

    AWS.config.update({accessKeyId, secretAccessKey, region: 'eu-central-1'})
    const s3 = new AWS.S3({ signatureVersion: 'v4', region: 'eu-central-1' })

    const key = data.filename
    const Bucket = 'discuss-media'
    // const signedUrlExpireSeconds = 60 * 5

    const signed = s3.createPresignedPost({
      Bucket,
      Fields: {
        key
      }
    })
    hook.data.signature = signed.fields
    hook.data.postEndpoint = signed.url
    console.log(signed)
    // hook.data.signedUrl = url

    return hook
  }
}
