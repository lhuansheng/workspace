let name = 'aa'
let obj = {
  name:'lisa'
}
function say(age,play){
  console.log(`her name is ${this.name}, age is ${age}, hobby is ${play}`)
}

// say.apply(obj,[12,'play voll'])

Function.prototype.myApply = function(ctx,args) {
  ctx.fn = this
  ctx.fn(...args)
  delete ctx.fn
}
say.myApply(obj,[12,'play voll'])