em: 相对于自己的 font-size  (错误：相对于父元素的font-size)
rem: 相对于 html 的 font-size 计算大小
1. font-size 设置多少
2. 如何由设计稿快速还原

DPR: device piex ratio(设备像素比) 设备真实像素 / 1px = 2 / 3
css 1px 在不同设备上面 渲染出来的像素是不一样的 2px(ip6) 3px(ipx)

想要 1px 边框 
1. meta init-scale: 0.5 所有的元素缩小0.5倍
   我写元素宽高时 按照扩大两倍之后的写
   一个元素 本来 20*20
   必须写成 40*40
   所以我们的设计稿 就需要 扩大两倍， 这样 量取的时候，量得的尺寸就是扩大两倍之后的尺寸

2. 等比缩放
   屏幕划分 10 等分
   750 / 10 = 75
   1125 / 10 = 112.5
   一份 就是 1 rem, html: font-size 75px 或者是 112.5px