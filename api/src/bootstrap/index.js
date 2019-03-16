module.exports = async function (app) {
  await require('./channel')(app);
  await Promise.all([
    require('./post')(app)
  ]);
};
