## 服务端渲染
https://tech.youzan.com/server-side-render/   一篇文章
https://reactrouter.com/web/api/StaticRouter  reactrouter 静态router
关于 package.json里面的两条命令
    监听build文件夹, exec 执行 bundle.js文件
    "dev:start": "nodemon --watch build --exec node ./build/bundle.js",
    配置文件为webpack.server.js  -- watch监听
    "dev:build:server": "webpack --config ./webpack.server.js --watch"

## 上午课程
1. 新建 服务端文件夹server 客户端文件夹 client
2. server下面新建index.js 
3. 配置 入口(index.js)出口文件 bundle.js
4. 配置babel 创建 .babelrc 的babel预编译 环境和 react
5. 创建 webpack.base.js 专门针对jsx语法, 服务端客户端都可以共用 
6. 配置不需要打包的内置模块如path
   const nodeExternals = require('webpack-node-externals')
   "externals":[nodeExternals()],
7. 安装webpack-merge,将 两个wepack.server.js合并输出
8. 创建一个公共组件 Header.jsx,将之导入服务端的index.js
9. 导入 renderToString,可以将html转字符串,这时差不多可以运行,但是header里面如果有事件(js)都不会生效
## 下午课程  同构组件 header.jsx
10. client 下面创建index.js 但是用 ReactDOM.hydrate进行绑定事件,而不是渲染
11. 配置 webpack.client.js ,出入口
12. package.json里面配置 运行入口dev:build:client
13.  server.js中 把public 映射成 静态资源的目录 app.use(express.static('public')),然后导入script
    路由配置 react-router-config 客户端配置好后 后端需要 staticRoutes来配置
14.  导入 renderRoutes 用  StaticRouter 配置   <StaticRouter location={req.url}>{renderRoutes(route) </StaticRouter>