## 服务端渲染
关于 package.json里面的两条命令
    监听build文件夹, exec 执行 bundle.js文件
    "dev:start": "nodemon --watch build --exec node ./build/bundle.js",
    配置文件为webpack.server.js  -- watch监听
    "dev:build:server": "webpack --config ./webpack.server.js --watch"
1. 新建 服务端文件夹server 客户端文件夹 client
2. server下面新建index.js 
3. 配置 入口(index.js)出口文件 bundle.js
4. 配置不需要打包的内置模块如path
   const nodeExternals = require('webpack-node-externals')
   "externals":[nodeExternals()],
5. 