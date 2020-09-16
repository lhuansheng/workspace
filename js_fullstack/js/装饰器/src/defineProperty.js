let obj = {}
obj.c = '123'
// defineProperty定义属性，
Object.defineProperty(obj,'a',{
  // 添加a属性，值为1
  value:1
})
// get set 