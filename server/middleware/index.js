const upload = require('./upload')

module.exports = function (app) {
  app.use('/upload', upload({ app }))
}
