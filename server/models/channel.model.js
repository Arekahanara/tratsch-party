module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const channel = new Schema({
    name: { type: String, required: true }
  }, {
    timestamps: true
  })

  return mongooseClient.model('channel', channel)
}
