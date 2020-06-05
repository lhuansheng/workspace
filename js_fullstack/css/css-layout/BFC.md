## 格式化上下文
koa: ctx === context
token: 泛指

## BFC
block-formating-context 块级格式上下文

## 新建一个 BFC
- float
- absolate
- display: inline-block || table-cells || table-captions
- overflow 的值不为 visible
- 根元素默认新建 BFC

## flex 布局
react-native 只支持 felx, RN 已经证明了 只用 flex 是可以很好的完成布局的
## float
本来是用 文字环绕的
float 用来 布局了，float 清除
clear: both(left,right) //清除浮动

## BFC规则
- 盒子在垂直方向上，从上往下布局
- 垂直方向上的距离由 margin 决定
- 垂直方向上的距离由 margin 决定， 同一个 BFC 之内， 垂直方向上 block-level-box margin 会折叠(留白，够了就行)
- 由于有 float 元素， 一个盒子大小可能会缩小，除非它
- BFC 区域 不会和float 重叠 (两栏布局   左侧固定，右边自适应)

## layout 
normal flow
position
float: 文字环绕， 布局： 几行几列
flex: