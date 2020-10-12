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
  // 给context添加一个属性，
  // 该属性fn里面的所有内容的this是指向context的，
  // 然后我们让该属性的this指向function.call里面的this
  context = context?context:window
  // 防止context里面有属性冲突
  let key = Symbol()
  context[key] = this
  let res = context[key](...args)
  delete context[key]
  return res
}
// 我应该又懂了，，， 
// context创建一个属性fn,该fn的this其实是指向context,
// 我们将其修改为function.call里面的this,
// 所以bar.call(foo) 是修改了 foo的this指向了 bar

// say.myCall(obj,22,22)