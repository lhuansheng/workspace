增加属性名和属性值
1. 当遇到空格，进入beforeAttaributeName 
2. 判断 如果遇到 /[a-zA-Z]/, 新建一个字符串对象currentAttribute 里面包含name和 value
3. 并且调用一个新的函数  attributeName
4. 创建这个函数  判断 如果遇到字母  自身调用自身将属性完善
5. 当遇到 “=” 时，调用新的函数 attributeValue
6. 新建这个函数 当遇到 字母 自身调用自身完善value
7. 若遇到 " ，自身调用自身，什么都不做



## 浏览器 匹配css规则
效率： **按照 css 选择器 从后往前匹配**
