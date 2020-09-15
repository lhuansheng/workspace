bfc Block Formatting Context
仅仅对块级的一些规则，比如margin top和bottom会有边距重叠问题
https://zhuanlan.zhihu.com/p/25321647
如何创建bfc，以及bfc的规则

## 如何创建bfc
只要元素满足下面任一条件即可触发 BFC 特性：

body 根元素
浮动元素：float 除 none 以外的值
绝对定位元素：position (absolute、fixed)
display 为 inline-block、table-cells、flex
overflow 除了 visible 以外的值 (hidden、auto、scroll)

 
## bgc 规则
 bfc 解决 float 原理之一
 bfc 区域不会和 float 区域重叠 - bgc区域float区域重叠.html
 bfc 是独立的容器

 具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

 ## bfc 作用
 1. 同一个 BFC 下外边距会发生折叠
   如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。
 2. BFC 可以包含浮动的元素（清除浮动）
 3. BFC 可以阻止元素被浮动元素覆盖