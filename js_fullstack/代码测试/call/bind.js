let name = 'aa'
let obj = {
  name:'lisa'
}
function say(age,play){
  console.log(`her name is ${this.name}, age is ${age}, hobby is ${play}`)
}
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