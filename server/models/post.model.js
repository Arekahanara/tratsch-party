module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const post = new Schema({
    categoryId: { type: String, required: false },
    channelId: { type: Schema.Types.ObjectId, ref: 'channel' },
    content: { type: String, required: false },
    userId: { type: String, required: false },
    media: { type: String, required: false },
    url: { type: String, required: false }
  }, {
    timestamps: true
  })

  return mongooseClient.model('post', post)
}
