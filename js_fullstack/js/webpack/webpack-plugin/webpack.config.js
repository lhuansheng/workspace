const CodeBeautify = require('./CommentClear');
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, './1-webpack.js'),
  mode: "development",
  plugins: [
    new CodeBeautify()
  ]
}
