// 将某个函数柯里化
function sum(a,b,c) {
  return a + b + c
}
function detail(fn) {
 let len = fn.length
 let args = []
 return function help(...args1) {
   args = args.concat(args1)
   if(args.length>=len){
     return fn(...args)
   }
   return help
 }
}
let suma = detail(sum)
let sum1 = suma(1)
console.log(sum1(2,4))