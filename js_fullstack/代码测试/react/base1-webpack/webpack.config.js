const HtmlWebpackPlugin = require('html-webpack-plugin')
let htmlWebpackPlugin = new HtmlWebpackPlugin({
  template:'./public/index.html',
  filename:'index.html'
})
const config = {
  entry:'./src/index.js',
  resolve:{
    extensions:['.js','.jsx']
  },
  devServer: {
    contentBase:'./public',
    hot:true,
    port:3000
  },
  output: {
    path:'./dists/index.html'
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
    htmlWebpackPlugin
  ]
}
module.exports = config