const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default
// 1. 分离基础库
const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // 排除react,不打包，可以自己在public下导入
  externals: {
    react: 'React'
  },
  // 优化 chunk 分离
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',  //all 所有的 import  // async import()  
  //     cacheGroups: {
  //       // 把满足下面规则的代码分到同一个组

  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //       },
  //     }
  //   }
  // },
  devServer: {
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
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:5]'
            }
          }
        },
        
      ],
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 
      //   {
      //     loader: 'css-loader',
      //     options: {
      //       modules: {
      //         mode: 'local',
      //         localIdentName: '[hash:base64:5]'
      //       }
      //     }
      //   },
        
      // ],
      //   //css-loader css 这个模块
      //   //style-loader css内容 插到html 的 style标签之内
      //   // css-module
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/ip6x2.png', to: './' },
      ],
    }),
    // 压缩图片的
    // new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new MiniCssExtractPlugin(),
  ]
}
module.exports = config

// dist 存着 就是一个 最终打包的结果
// dist 最终上线的一个 文件夹