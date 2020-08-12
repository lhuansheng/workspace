@testable
@addInstance
class MyTestableClass {

}
// 给类增加属性
function testable(target) {
  target.isTestable = 'hello world'
}
// 给类增加方法
function addInstance(target) {
  target.prototype.myYiDa = () => {
    console.log('no, it is your YiDa')
  }
}
// console.log(MyTestableClass.isTestable)
let a = new MyTestableClass()
a.myYiDa()

// tsc index.ts
// node index.js