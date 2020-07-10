import { add } from './math.js'
// 只用到了 add, 为了优化代码体积，可以直接删除 divide
// rollup(打包工具)
console.log(add(3, 4))
