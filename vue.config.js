 const { NODE_ENV, BASE_URL = '/blogtest/' } = process.env

module.exports = {
  publicPath: NODE_ENV === 'production' ? BASE_URL : '/blogtest/'
  ,lintOnSave: false
}
