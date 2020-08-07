// 手写柯里化
function sum1(a, b, c) {
  return a + b + c
}
function curry(fun) {
  const len = fun.length
  // console.log(len)
  // fun 普通的函数
  // return 出去的就是具有柯里化 (函数参数分批次)

  //  无论你分几次传，接收到后，放到 args里面
  let args = []
  // 
  function help(...arg) {
    args = args.concat(arg)
    if(args.length >= len) {
     return fun(...args)
    }
    else {
      return help;
    }
  }
return help
 
}
// 分批求
let curriedSum10 = curry(sum1)
curriedSum10(1)
console.log(curriedSum10(2,3))
console.log(curriedSum10(2,2,3))
// console.log(sum(1)(2)(3));

