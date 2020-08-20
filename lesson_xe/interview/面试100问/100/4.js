// 从面向对象聊继承？  Object.create()
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}, Am I human? ${this.isHuman}`)
  }
}
// 最简单的继承方案
const zhaoboy = Object.create(person)
zhaoboy.name = '酷吧你我他'
zhaoboy.isHuman = true
zhaoboy.printIntroduction()
console.log(zhaoboy.__proto__)
console.log(zhaoboy.__proto__ === Object.prototype)


let bbb = {
  b:1
}
// let xxx = {}
  // xxx.__proto = bbb
  let ccc = Object.create(bbb)
  ccc.a = 1;
  console.log(ccc);

