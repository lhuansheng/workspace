## webpack 概念
本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

## 创建基本的webpack项目
1. npm init -y 初始化项目
2. 在项目根目录创建src源代码目录和 dist产品目录
3. 在src目录下创建index.html
4. 使用 cnpm 安装 webpack,运行 cnpm i webpack webpack-cli -D   
  - 全局运行 npm i cnpm -g
5. 注意： webpack 4.x 提供了 约定大于配置的概念，目的是为了尽量减少 配置文件的体积
  默认约定了：
   - 打包的入口是 src -> index.js
   - 打包的输出文件是 dist -> main.js
   - 4.x 中 新增了 mode 选项(此选项为必选项，现在可能不是必选了，默认production)， 可选值为 development 和 production

  cnpm i webpack-dev-server -D  搞个服务器 实时更新
   cnpm i html-webpack-plugin -D  能够把html发到缓存内存中，比较快
   
## 在项目中使用 react
1. 运行cnpm i react react-dom -S
  - react: 专门用来创建组件和虚拟DOM的，同时组件和生命周期都在这个包中
  - react-dom: 专门进行DOM操作的，最主要的应用场景就是ReactDOM.render()
  


-S 项目从开发到上线都要用到的那些包  -D 工具都要装到 

## babel 
cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
cnpm i babel-preset-env babel-preset-stage-0 babel-prese-react -D

