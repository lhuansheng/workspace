生命周期三个阶段:
1. 初始化渲染 render componentDidMount
2. 更新阶段 shouldComponentUpdate render componentDidupdate
3. 卸载 componentWillUnMount

函数组件有状态了
1. useState 
2. useEffect 副作用  运行的时机 componentDidMount componentDidupdate componentWillUnMount 有决定性因素 依赖
3. useMemo 只能缓存值 
4. useCallBack 缓存函数
5. createContext,useContext 数据管理
6. useRef  ref 引用
7. useReducer redux

- meituan.com  -> bj.meituan.com  临时重定向
301: 永久重定向  http -> https
302: 临时重定向 需要登陆权限, 但是没登陆， 重定向到登陆页面
## 
relative 保留
absolate 脱离文档流
## cors 跨域资源共享
Access-Control-allow-origin
Access-Control-allow-method
Access-Control-allow-headers
Access-Control-allow-credentials: 允不允许携带 cookies
Access-Control-allow-max-age: 预检请求，缓存云间请求的结果

