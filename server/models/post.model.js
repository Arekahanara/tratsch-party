module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const post = new Schema({
    categoryId: { type: String, required: false },
    channelId: { type: Schema.Types.ObjectId, ref: 'channel', required: true },
    content: { type: String, required: false },
    userId: { type: String, required: false },
    media: {
      imageId: { type: Schema.Types.ObjectId, ref: 'media' },
      videoId: { type: Schema.Types.ObjectId, ref: 'media' }
    },
    type: { type: String, required: true, enum: ['IMAGE', 'TEXT', 'VIDEO'], default: 'TEXT' },
    url: { type: String, required: false }
  }, {
    timestamps: true
  })

  return mongooseClient.model('post', post)
}
