// 匹配位置
let str = 'hello'
// 匹配l前面的位置
let tql1 = str.replace(/(?=l)/g,'#')
let tql2 = str.replace(/(?!l)/g,'#')
console.log(tql2)