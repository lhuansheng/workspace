1. 分离基础库(react/react-dom) 可以缓存的时间比较久的
2. 业务代码: 经常变动的
   
   externals 不要打包 react/react-dom

<!-- 提取css -->
   mini-css-extract-plugin