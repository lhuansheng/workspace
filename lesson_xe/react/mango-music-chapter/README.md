1. 做react/vue 项目， 仿一个音乐类的
2. 做一个上线的业务 思路 架构 技能点

- react 组件由 组件component 实例 和一个 css 文件 styl
不一定要用官方的 create-react-app, 下次自己的项目，我就可以从这个目录开始 项目模板
头条，
类文件大写， 一个文件夹，一个组件，便于维护和模块化
- 单页应用？ Single Page Application  SPA
  只有一个页面的应用
  提升网站的用户体验
  点击路由时，不会重新刷新整个页面， 而是根据路由的配置把相应的组件显示出来  
- 根据界面可以分析出 头尾不同，中间内容根据Route 匹配 

- loading 组件 在整个应用中是什么地位？
  哪个目录下创建？
  components 路由级别组件   业务组件
  loading 服务于任何list API 列表组件  通用组件
  
  1. 数据请求阶段， 显示 loading, 
  2. 数据来了后，隐藏它
  3. 父组件决定  要给loading 传参

- api/ 分层的能力， 职责分离 是代码复杂， 且大型化的前提，
  每个路由模块页面独立一个 js 文件  便于维护 和代码阅读


- 长的列表页面， 在移动 支持 Scroll

字节跳动
一直学， 没有输出，是不行的


1. App.js下创建路由  recommend  ranking  search
2. 从react-router-dom 获取 Switch, NavLink, Redirect  使得可以在同一个页面切换，，Redirect 在根目录会直接切换到<Redirect from="/" to="/recommend"/>  recommend
3. 在App.js 下加 <header></header>,因为它不在其他路由下，创建在App.js中
4. 接下来 创建components 目录(业务组件目录),在该目录下创建 recommend目录(每个 路由级别 组件都应该有一个目录)，在该目录下创建 Recommend.js 和recommend.styl(组件首字母大写，css写在同级，标配)  还有两个路由组件按照同样的方法创建

5. 来到 Recommend.js, 通过this.state 创建一个假数据来构建一个swiper
6. 由于数据没有出来前，需要一个加载，因此 在this.state 加 loading: true 我们需要专门创建一个 loading 组件，因为这个是一个通用组件，我们在 src 目录下专门创建一个common 目录，再创建loading目录，然后创建Loading.js， loading.styl, 放一张loading.gif图片，在该js 文件中引入图片和styl, 获取父组件传过来的 show(loading)的值，show为 false 则display: none，反之，display: inline-block
7. 接下来就是 Recommend.js 里面列表部分  在 this.state 放一个 newAlbums:[] 空数组，这个数组我们等下要传值进来。
8. 一个重点部分，我们需要获取 照片等的数据，也就是api的数据,在src目录下新建一个专门获取api数据的目录，目录名称为api，在api下建 recommend.js 文件 在该文件 export  直接导出该文件，在Recommend引入，解构该文件里面的方法，可以获取数据，然后渲染，再 下载一个懒加载的 包，使得图片懒加载

9. 来到 ranking