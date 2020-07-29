//设计一个简单的任务队列, 要求分别在 1,3,4 秒后打印出 "1", "2", "3"

class Queue { 
  constructor() {
      this.time = {
          i: 0
      }
  }
  task(time, func) {
      this.time.i = this.time.i + time; 
      setTimeout(() => {
          func()
      }, this.time.i);
      return this;
  }
  start(){
    
  }
}

 

new Queue()
    .task(1000, () => {
        console.log(1)
    }).task(2000, () => {
        console.log(2)
    }).task(1000, () => {
        console.log(3)
    }).start()

