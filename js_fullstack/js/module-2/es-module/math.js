export const add = (a, b) => a + b
export const min = (a, b) => a - b
// bar 和 math.js 引用的关系
export var bar='bar'
setTimeout(() => {
  bar = 'biz'
}, 3000);