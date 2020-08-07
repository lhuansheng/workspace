import { add, min, bar } from './math.js'
console.log(add(1,2))
console.log(bar)
setTimeout(() => {
  console.log(bar)
}, 5000);
// tree-shaking: min 没有必要合并到 js 文件中
// js: 1. 没有模块化的普通脚本文件
// 2. module 一个模块
