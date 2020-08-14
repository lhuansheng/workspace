const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
// 这件事只订阅一次
myEmitter.once("event", () => {
  console.log(++m);
});
myEmitter.on('price', (e) => {
  console.log('价格变成了'+e)
})
myEmitter.on('price', () => {
  console.log('价格变了1')
})
// 发布价格变化
myEmitter.emit('price',34)
myEmitter.emit("event");
// 打印: 1
myEmitter.emit("event");