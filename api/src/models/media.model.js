module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const media = new Schema({
    name: { type: String, required: true },
    filename: { type: String, required: true },
    postId: { type: Schema.Types.ObjectId, ref: 'post' },
    url: { type: String, required: false }
    // postEndpoint: { type: String, required: false },
    // signature: { type: Schema.Types.Mixed, required: false }
  }, {
    timestamps: true
  })

  return mongooseClient.model('media', media)
}
