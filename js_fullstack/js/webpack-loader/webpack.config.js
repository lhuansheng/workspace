const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    // 静态资源目录,热更新
    port:8080,
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.md$/,
        use:{
          loader: path.resolve(__dirname,'./src/md-loader.js') 
        },
        exclude: /node_modules/
      },
      {
        test: /.vue$/,
        use:{
          loader: path.resolve(__dirname,'./src/vue-loader.js') 
        },
        exclude: /node_modules/
      },
      // jsx => createElement
      // jpg -> base64   file-loader
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包完的资源自动插入index.html
      template: './public/index.html',
      filename: 'index.html'
    }),
  ]
}
module.exports = config
