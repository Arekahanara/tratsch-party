module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const channel = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, lowercase: true, index: { unique: true } }
  }, {
    timestamps: true
  })

  return mongooseClient.model('channel', channel)
}
