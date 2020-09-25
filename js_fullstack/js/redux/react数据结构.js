function xx() {
  const [count,setCount] = usestate(1)
  const fn = useCallback(() => {}, [])
  const val = useMemo(() => 123,[])

}
// 链表的形式缓存数据
// useState的状态 -> useCallBack 函数 -> useMemo
// re-render
// useState的状态 -> useCallBack 函数 -> useMemo

// react16新增的static api
// static getDerivedStateFromProps(props, state)
// static getDerivedStateFromError(error) 新增的erorBoundary