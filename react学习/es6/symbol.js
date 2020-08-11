let sym = Symbol()
let sym2 = Symbol()
let sym1 = Symbol('ab')
let obj = {
  name:'小明',
  age: 14
}
obj[sym] = '1'
obj[sym2] = '1'
obj[sym] = '2'
// 如果使用symbol值作为对象属性，那么这个属性不允许遍历(读取)，所以，如果要读取

let symArr = Object.getOwnPropertySymbols(obj)
console.log(obj[symArr[0]],obj[symArr[1]])
