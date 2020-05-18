- 博客网站， 我们还欠缺哪些技能
  React 做 UI 组件化思维，
  - 列表
  - 详情页
  - 评论
  node 做后端， 后台数据库
  不用后台数据库怎么样向我们的应用提供数据呢？
  - 爬取 cherrio
  - MVC  Model(Mysql)-View(React)-Controller
  可以实现增删改查 但不想启用mysql 这么繁琐的步骤？
  - 简单服务的话， json 文件作为资源， 代替数据库
  使用json-server 来启动它 restful api 格式
  /posts post  {id:, title:, content:}

  /posts/show/1 看某篇文章的url
  复杂吧 不能有动词  /posts/1 show 的概念由谁来表达？
  / get 动词
  /posts  POST

  JSON 是数据格式
    设计一个url
    汇款需求，从账户1向账户2汇款520元，  如何设计url？

  /accounts/:1/transfer/:520/to/:2
  restful 动词 + url(动词)

  资源
  /transaction 转账  POST
  {from:1,to:2,amout:500.00}
  Restful 是后端在设计url 的国际标准规范啊!!!
    

  npm init -y json初始化