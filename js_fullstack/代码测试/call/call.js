let obj = {
  name:'lisa'
}
let name = 'aa'
function say(age,play){
  console.log(`her name is ${this.name}, age is ${age}, hobby is ${play}`)
}
let aaa=say.call(obj,18)
aaa('play basketball')
Function.prototype.myCall = function(context,...args) {
  // 将外界的context的this指向 function的this
  context.fn = this
  context.fn(...args)
  delete context.fn
}
// say.myCall(obj,22,22)