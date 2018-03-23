module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const reaction = new Schema({
    postId: { type: Schema.Types.ObjectId, ref: 'post' },
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    channelId: { type: Schema.Types.ObjectId, ref: 'channel' },
    code: { type: String, required: true }
  }, {
    timestamps: true
  })

  return mongooseClient.model('reaction', reaction)
}
