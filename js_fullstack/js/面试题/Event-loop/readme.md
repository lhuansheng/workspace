1. setTimeout
2. Promise
3. 请求
4. 事件 addeventListener
5. appendChild 页面

浏览器内部有很多线程:
1. 定时器触发线程
2. http
3. GUI渲染 

## 什么是 Event-loop
  浏览器协调用户交互，渲染，网络，采取的一个策略    

```js
setTimeout(() => {
 console.log(1);
}, 0)
Promise.resolve(3).then(console.log);
console.log(2);
```

## 宏任务，任务
setTimout, 整体的一段 script 
由宿主环境引起的任务
## 微任务
Promise.then  MuatationObserver Process.nextTick
由js本身引起的任务


## 流程
只要宏任务队列不为空:
  1. 从宏任务队列里面取出**一个**执行
  2. 从微任务队列里面取出**所有**执行，如果在这执行过程中，又产生了微任务，再次重复第2步
  3. 有可能进入浏览器的更新渲染阶段
    1. requestAnimationframe 回调
    2. 执行 IntersectionObserver 回调(图片懒加载)
    3. 重新绘制渲染

以60 fps 每一帧花费16.666ms
我们的渲染是
一个宏任务 => 清空微任务 => 渲染 **-》**一个宏任务 => 清空微任务 => 渲染 **-》** 一个宏任务 => 清空微任务 => 渲染
