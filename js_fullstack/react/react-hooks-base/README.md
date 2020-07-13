生命周期三个阶段:
1. 初始化渲染 render componentDidMount
2. 更新阶段 shouldComponentUpdate render componentDidupdate
3. 卸载 componentWillUnMount

函数组件有状态了
1. useState 
2. useEffect 副作用  运行的时机 componentDidMount componentDidupdate componentWillUnMount 有决定性因素 依赖
3. useMemo 只能缓存值 
3. useCallBack 缓存函数
