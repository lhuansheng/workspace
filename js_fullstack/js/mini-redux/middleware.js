const _ = require('lodash')
function fn1(str) {
  return str+'def'
}
// class A
function fn2(str) {
  return str.toUpperCase()
}
// class B
 // fn3(fn2(fn1()))
// 继承
// 组合
// reduce 也可以实现
const fn = myFlow([fn1,fn2])
console.log(fn('abc'))
function myFlow(fns) {
  return function(defalutVal) {
    let res = defalutVal
    while(fns.length) {
      let first = fns.shift()
      res = first(res)
    }
    return res
  }
}
