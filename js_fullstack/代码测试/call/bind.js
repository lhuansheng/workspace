let name = 'aa'
let obj = {
  name:'lisa'
}
function say(age,play){
  console.log(`her name is ${this.name}, age is ${age}, hobby is ${play}`)
}
// bind与 call 和 apply 不同，调用bind之后不会立即调用，并且可能需要参数，需要返回一个function
Function.prototype.myBind = function (ctx,...args1) {
  let THAT = this
  let arr = []
  arr.push(...args1)
  return function(...args2) {
    arr = arr.concat(args2)
    // ctx.fn = THAT
    // ctx.fn(...arr)
    THAT.apply(ctx,arr)
  }
}
// say.bind(obj,18)('jump')
say.myBind(obj,18)('jump')