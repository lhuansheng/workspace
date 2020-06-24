// 0x62 是什么? 十六进制  0x开头的就是16进制
// js 在原生类型上 缺少对二进制的支持 number
// 62 ASCII B
// 0x62 十六进制 用更底层的buffer 结构来存
// const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
console.log(buf.toString())

// hello world 他的缓冲区格式, 怎么做?
// 最关键的地方是什么? 存储的本质 内存单元 物理单元
// 最高层的 string  -> 底层的Buffer

// 分步思维
// 1. 字符串的每一位 去找他的 ascii 的值
// 2. map 0x + charCodeAt  字符串凭借
// 3. Buffer from 
const array = 'hello world'.split('').map(function(v){
  return '0x'+v.charCodeAt(0).toString(16)
})
const buf1 = Buffer.from(array)
console.log(array)
console.log(buf1.toString())