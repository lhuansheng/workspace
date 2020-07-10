## commonJS
导出: 
module.exports = function() {}
module.exports = {}
导入:
require
1. commonJS 一定要 代码运行起来才知道引入了哪些模块  
2. commonJS 可以出现在逻辑分支里面

## es-module 模块化
1. import/export 不论你写在哪， 都会提前执行
2. 在代码静态分析(不用执行代码)，就可以分析出你引入了哪些模块

## AMD CMD UMD以前用的
UMD: 统一模块化方案
```js
(function() {
// 判断代码最终执行的环境到底是 node 还是 浏览器
})()
```


es6之后才有的

没有模块化的时候 只能用 script src 但是，这样，不同的 script 引用到同一个 html，会有变量名冲突。