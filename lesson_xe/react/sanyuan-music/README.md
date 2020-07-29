- router
  1. react-router
  react-router-dom
  react-router-config
  2. react-router 嵌套结构
    config routes 配置一下清晰了
  当路由比较复杂时， 传统的手写 router/route 配置难以维护，
  企业级的router 配置方案react-router-config, 清晰，可以维护的 routes/index.js 配置
  layout app 总有几套皮肤， 匹配那个级别的所有路由的
  routes react-router-config renderRoutes(route,routes)

  - search 业务
    接口文档 
    - 热门搜索
      /search/hot
      参数为null
      返回值 result.hot
    - 搜索建议
      suggest?keywords=%Esfq%re  前端编码 后端解码
      参数 keywords
      返回值 albums
    - 搜索结果
      /search?keywords=


  ## readme
  ## 大纲
  redux
  1. 只有一个store
  2. 所有的列表中的reducer(recommend,Singers,rank)都合并到最外层的reducers
  3. 在每个组件单独建store,但是不会有store，这些reducers 都会引入外层reducers,由一个store统一管理
  router

