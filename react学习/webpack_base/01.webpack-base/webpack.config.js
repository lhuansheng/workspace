const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')//导入 在内存中自动生成 index 页面的插件

// 创建一个插件的实例
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname,'./src/index.html'),//源文件
  filename: 'index.html'
})
// 向外暴露一个打包的配置对象， 因为 webpack 是基于Node构建的，所以支持所有 node api 和语法
// webpack 默认只能打包处理 .js 后缀名类型的文件； 像 png .vue 无法
//  主动处理，所以要配置第三方的loader
 module.exports = {
   mode:'production', // development开发模式 production 产品环境，打包发布
  //  在 webpack 4.x 中，有一个很大的特性， 就是约定大于配置 ，默认的打包路口文件 src -> index.js
  
  plugins:[
    htmlPlugin
  ],
  module:{
    rules:[
      {
        test:/\.jsx?/i,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-react']
          }
        },
        exclude:/node_modules/ //exclude 排除项
      }
    ]
  },
 
    
  
 }


// 行不行？ 目前不行  //这是 es6 中向外导出模块的api与之对象的是 import ** from '标识符'
// export default{}  //谷歌不支持
// 哪些 特性 node 支持呢？ 如果 chrome 浏览器支持哪些，则 node 就支持哪些