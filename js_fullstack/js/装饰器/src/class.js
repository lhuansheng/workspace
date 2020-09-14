//属性 方法
// 装饰 class 的时候， 能够拿到 这个class
function observer(target) {
  target.displayName = 'XXX'
  return target
}
@observer
class Com {
  render() {
    console.log(displayName)
    return '123'
  }
 
}
// let a = new Com()
console.log(Com.displayName)