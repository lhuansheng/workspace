## replace
```js
tql.replace(reg,(...arg) => {
    console.log(arg)
  })
  //...arg可以把匹配到的信息列出来
  ```

## 驼峰命名
background-color
backgroundColor  
```js
let reg = /-([a-z]{1})/ig
str = str.replace(reg,'$1'.toUpperCase())
  ```
## 匹配位置
^: 首
$: 尾
(?=p): 正向先行断言 p前面
(?!p)  负向先行断言
<!-- es6 -->
(?<=p)   p后面
(?<!)

