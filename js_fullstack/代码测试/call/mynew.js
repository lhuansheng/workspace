function Cat(name) {
  this.name = name
  // return {a:1}
}
Cat.prototype.eat = function () {
  console.log(this.name+' is eating')
}
function myNew(Constructor,...args) {
  let obj = {}
  obj.__proto__ = Constructor.prototype
  let res = Constructor.apply(obj,args)
  // console.log(typeof res==='object')
  return typeof res==='object'?res:obj
}
// let a = new Cat('小白')
let a = myNew(Cat,'小黑')
console.log(myNew(Cat,'小黑'))
a.eat()