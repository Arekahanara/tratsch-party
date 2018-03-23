module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const post = new Schema({
    categoryId: { type: String, required: true },
    channelId: { type: Schema.Types.ObjectId, ref: 'channel' },
    content: { type: String, required: true },
    userId: { type: String, required: true },
    media: { type: String, required: true },
    url: { type: String, required: true }
  }, {
    timestamps: true
  })

  return mongooseClient.model('post', post)
}
