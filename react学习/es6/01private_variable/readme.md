## es6 私有变量的实现
这里大概介绍几种常用的方法，以及他们的优缺点
- 1. 约定
```js
class Example {
	constructor() {
		this._private = 'private';
	}
	getName() {
		return this._private
	}
}

var ex = new Example();

console.log(ex.getName()); // private
console.log(ex._private); // private
```
在es6中,有个约定就是在属性名前加一个_代表私有属性,外面不应该访问
  - 优点: 写法简单,调试方便,兼容性好
  - 缺点: 外部可以访问,语言没有配合机制,如for in 语句会将所有属性枚举出来
