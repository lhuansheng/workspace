import { Application } from 'egg';
// 约定俗成
export default (app: Application) => {
  const { controller, router } = app;  // 1 controller router
// controller url -> controller -> render view
// 路由列表 nginx 服务器代理 (ip http://www.baidu.com -> 解析ip地址 -> ngnix 80端口( 内网哪台机器) -> 转到 Egg.js 7001 端口)
// 后端路由 负责首页/   MVC Controller / index.html #root /   /api负载均衡
// 前端路由 react build js 挂载 SPA 前端负责跳转更快 useEffect => reducer action-> api 后台/api/user /api 后端 吐数据的地方
  router.get('/', controller.home.index);
  // 登陆接口 /api/login
  router.get('/api/login',controller.login.index);
};

