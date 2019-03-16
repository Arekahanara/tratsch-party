module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const category = new Schema({
    name: { type: String, required: true }
  }, {
    timestamps: true
  })

  return mongooseClient.model('category', category)
}
