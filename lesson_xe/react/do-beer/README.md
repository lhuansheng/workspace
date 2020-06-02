主题： react beer 应用开发思路整理
beer 搜索，  -》 列表  -》 点进去  创建路由

3 个路由的设计  beer 这三个路由

搜索跟列表显示 合二为一  /search/:searchTerm?a=1&b=2&c=3  params 动态参数
详情页 /beer/:beerId
语义化设计URL   /post/:postId

## 代码执行流程
1. 在 index.js 中 首先导入路由
2. 在路由中创建 根目录指向 Main.js  search目录也指向 Main.js   beer目录指向 single(暂时还没有写这一部分)
3. 接着我们创建 Main.js， 在里面搞个构造器，state 里面有 beers[] 和loading 加载状态
4. 在Main.js 创建一个生命周期，在这个生命周期里面调用一个函数，该函数可以获取一个api的数据 并将数据放到 state里面 传完 loading 为 false 表示数据全部传过来了
5. 在渲染组件里面将 数据传给 Results组件
6. 创建 Results.js  渲染loading
    并且 map 循环 Beer组件
7. 创建 Beer.js 在该组件获取 api 中的 details 里面的image id 等 渲染到 虚拟dom树上