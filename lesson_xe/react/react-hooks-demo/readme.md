1. tsx 工作流
.tsx React 组件 -> webpack.config.js -> awesome-typescript-loader ->
tsconfig.json(ts文件转js) -> babel(polyfill + env + plugin 装饰器模式) -> react DOM -> webpack-dev-server html-webpack-plugin footer script bundle.js

2. 最烦的是什么? react-scripts
约定 

3. hooks 特色
  - useState
  三个阶段: 
  - useEffect
  <!--  -->
  - useCallback
  - useMemo 取代 pureComponent
  - useRef 
  - useReducer 
  - useContext 

4. 分析react 项目是如何运行的
jsx
root
jsx 编译的过程
正则 <(.+)>...</>
- 节点的类型
  有哪些? 标签节点 div h4 
  组件 递归
  Fragment 只会创建一个 Fragment ，不会在页面上生成新的节点，一个代理，一次性挂载到页面
<!-- 相同的放上来，其他的覆盖 -->
  {...useInfo,name: e.target.value}
  文本 退出条件

- 你在做项目的时候遇到了什么问题啊
  - 文档 api
  - 互相尊重 极客范
  - useRef 解决闭包的副作用问题
  - 接口数据还没有加载完成，用户提前退出报错
