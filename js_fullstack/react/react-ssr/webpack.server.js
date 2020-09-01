// 处理node端 import

const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js')

const serverConfig = {

  "target":'node',
  "mode": 'development',
  // 打包入口
  "entry": './src/server/index.js',
  // 输出文件，目录
  "output": {
    "filename": 'bundle.js',
    // 当前路径下的build
    "path": path.resolve(__dirname,'build')
  },
  // node内置的模块不需要打包
  "externals":[nodeExternals()],
}
// module.exports = serverConfig;
module.exports = merge(baseConfig,serverConfig)