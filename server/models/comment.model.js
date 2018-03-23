module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const comment = new Schema({
    content: { type: String, required: true },
    postId: { type: Schema.Types.ObjectId, ref: 'post' },
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    parentId: { type: Schema.Types.ObjectId, ref: 'comment' },
    channelId: { type: Schema.Types.ObjectId, ref: 'channel' }
  }, {
    timestamps: true
  })

  return mongooseClient.model('comment', comment)
}
