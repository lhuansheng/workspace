增加属性名和属性值
1. 当遇到空格，进入beforeAttaributeName 
2. 判断 如果遇到 /[a-zA-Z]/, 新建一个字符串对象currentAttribute 里面包含name和 value
3. 并且调用一个新的函数  attributeName
4. 创建这个函数  判断 如果遇到字母  自身调用自身将属性完善
5. 当遇到 “=” 时，调用新的函数 attributeValue
6. 新建这个函数 当遇到 字母 自身调用自身完善value
7. 若遇到 " ，自身调用自身，什么都不做

<!-- 1:38 -->

## 浏览器 匹配css规则
效率： **按照 css 选择器 从后往前匹配**

## layout
display: flex | block | inline-block | grid
<!-- 水平居中 -->
justify-content: center; 
position: 
float: 
。。。
用这些对位置产生影响的元素，计算元素的位置信息，算出坐标系里面的（x,y)
## 正常的文档流
脱离文档流：float： left position 

## normal flow
行内元素 inline-level-box: 水平从左往右一个接着一个布局
块级元素 inline-level-box: 垂直方向从上往下一个接着一个布局 
relative 定位：
