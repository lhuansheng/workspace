let a = {
  a:1
}
Object.setPrototypeOf(a,{
  b:1
})
for (const k in a) {
  // 以前没有Object.keys用这个方式
  if (a.hasOwnProperty(k)) {
    console.log(k)
  }
  // 如果用下面的方式会在原型链查找
  console.log(k,'111')
}
// a in b 会在原型链查找