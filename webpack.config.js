const slsw = require('serverless-webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: slsw.lib.entries,
  externals: ['aws-sdk'],
  plugins: [new UglifyJSPlugin()],
}
