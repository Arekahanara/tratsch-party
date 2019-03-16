const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')

module.exports = function (options = {}) {
  const { app } = options
  const { accessKeyId, secretAccessKey } = app.get('aws')
  const s3 = new aws.S3({
    secretAccessKey,
    accessKeyId
  })

  const uploader = multer({
    storage: multerS3({
      s3: s3,
      acl: 'public-read',
      bucket: 'discuss-media',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname})
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString() + '.' + file.mimetype.split('/')[1] )
      }
    })
  })

  return function upload (req, res) {
    const mediaService = app.service('media')
    uploader.array('file')(req, res, () => {
      Promise.all(
        req.files.map((item) => {
          return mediaService.create({
            name: item.originalname.replace(/\..+$/, ''),
            filename: item.originalname,
            url: item.location
          })
        })
      )
        .then((blobs) => {
          res.json(blobs)
        })
    })
  }
}