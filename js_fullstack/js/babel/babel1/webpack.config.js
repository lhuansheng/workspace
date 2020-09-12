// 自动
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const config = {
  entry: './src/index.js',
  resolve: {
    extensions:['.js','.jsx']
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        use:['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader',{
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:5]'
            }
          }
        }],
        // style-loader css内容 插入到html的style标签内
        // css-loader 处理 css 这个模块
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename:'index.html'
    }),
    // new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/img', to: './' },
      ],
    }),
  ]
}
module.exports = config