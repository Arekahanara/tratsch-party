module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const user = new mongooseClient.Schema({
    email: {type: String, index: { unique: true }, required: true},
    username: {type: String, index: { unique: true }, required: true},
    password: { type: String },
    facebookId: { type: String }
  }, {
    timestamps: true
  })

  return mongooseClient.model('user', user)
}
