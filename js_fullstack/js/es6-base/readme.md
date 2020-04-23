## 类数组对象
对于类数组对象无法调用的forEach,map等 数组的使用方法

1. Array.prototype.forEach.call  
  Array.prototype.map.call  首先找到数组的位置,然后借用

2. Array.from() 方法从一个类似数组创建一个新的数组实例。
就是将类数组变成数组


