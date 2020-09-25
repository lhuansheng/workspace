const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  entry:'./src/index.js',
  resolve:{
    extensions:['.js','.jsx']
  },
  devServer:{
    contentBase:'./public',
    hot: true,
    port:3000
  },
  module:{
    rules:[
      {
        test:/(.js|.jsx)$/,
        use:['babel-loader'],
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename:'index.html'
    })
  ]
}
module.exports = config