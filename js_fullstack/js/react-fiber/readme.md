jsx -> createElement -> 虚拟DOM(react element) -> 对应平台的渲染器 reactDOM/react-native 渲染

setState -> 生成另外一棵 虚拟DOM -> dom diff(reconcilers) -> 找出哪些地方需要更新 -> 应用更新

## stack reconciler

## fiber reconciler
之前DOM diff 是 递归的过程: 我们遍历所有的节点，这个如果js执行时间是很长的，而且js 计算和页面渲染，绘制，互斥的。

浏览器的一层event-loop /frame:

- task
- microtask
- requestAnimationFrame
- render
- requestIdleCallback 当这一帧有空闲时间的时候
  
之前 js 是老大,我想执行多久我就执行多久
现在js主动让步, 我自己放在 requestIdleCallback 里面, js 和浏览器统一站在用户体验的角度,合作调度 cooperative scheduling
协程，纤程: 
- 能够把可中断的任务切片处理。
- 能够调整优先级，重置并复用任务。
fiber: 是一个数据结构(js对象)，支持 我们写出可终止暂停重新启动的代码 

```js
fiber: {
  child: 第一个子节点
  slibing: 下一个兄弟
  return: 父节点
}
```
fiber: 已单链表的形式表达一棵树
## 生命周期
render 阶段: 算出哪些 需要更新
Commit 阶段: 之前 render 阶段 已经花费很多时间，为了让用户尽快看到页面，所以这个会一气呵成，更新页面
generate： yield 



<!-- fiber目的,在执行diff的时候能够执行其他的任务,比如浏览器渲染 -->
