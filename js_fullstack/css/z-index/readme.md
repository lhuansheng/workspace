## 
我们的一个网页是沿着一条 z 轴排开的 (ps 图层)

## 层叠上下文形成 z-index 调整的就是这个层叠上下文
1. position 不为 static
2. filter transform perspective 不为 none
3. will-change 某个属性将要改变 

## layers
共同点：都是 z 轴 顺序
transform: translate3d 才能形成layers
will-change
backface-visibility 为 hidden               
video
css3里面的 animation 动画 开始的时候(开始时候会形成独立的层，结束后又回归)


有 3D transform

对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition（需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）
will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）



## 
js -> relayout(重新计算位置) -> repaint(重新绘制) -> composite(合成) -> GPU

## 提升 layers 的好处 
- 当前这个 layers 变化不会影响其他 layers
- 对于 transform, opacity 产生变化了，不会经过 relayout repaint 跳到 
composite 
