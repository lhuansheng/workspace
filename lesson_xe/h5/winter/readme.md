阿里winter 重学前端

https://static001.geekbang.org/resource/image/96/9e/9684130e423b6734b23652f4f0b6359e.jpg
语义化
1. html5 语义化标签
2. 找出不合理的地方
  结构相关？ 
  header + footer 二线公司
1. aside + article(main/content)
2. nav + ol>li
3. hgroup 原则:
<hgroup>
  <h1>Welcome to my WWF</h1>
  <hr/>不用
  <h2>For a living planet</h2>
</hgroup>

4. <abbr title="World wide Web">WWW</abbr> 缩略词
  爬虫排除的蜘蛛式看不见 读不懂的， 语义化的h5 标签 去让算法了解 网页的意义 SEO
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/hr
- 对传统div 块级元素 + span 行内 + css 的重构
p
问？
加了语义化标签要不要 id class
多个 article怎么办
5. figure figcaption
6. pre + code
  pre + samp