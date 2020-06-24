## 状态
```js
let isLogin = false
isLogin = true  // xxx 不应该这样
```
let arr = [0,1,2,3]
let sum  //依赖 arr

如果 arr 变化 输出 console.log()
<!-- log -->

## modx
1. provider
2. const store = { articleStore}
3. 取出 store @inject('articleStore') @observer
4. 怎么取: 通过 props 取出来 (组件的状态, action)
5. store 怎么写