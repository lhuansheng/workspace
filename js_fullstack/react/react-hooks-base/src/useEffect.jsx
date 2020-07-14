import React, { useEffect,useState,useCallback,useMemo } from 'react';
let arr = [1, 3]
let set = new Set(); // 无重复的数据集，约等于数组，不允许重复的数据

console.log(set)
function Demo(){
 const [ inputVal, setVal ] = useState('海阔天空')
 const [list, setList] = useState([])
//  const [val, setVal] = ['', () => {}]
// const val = [1, 2]
// 该val 不会被重新创建，也不会被销毁, 
// 缓存检查依赖，只有依赖没有变化才会使用上次的值
const val = useMemo(() => arr,[])
set.add(val)
console.log(set.size)

 const handleChange = useCallback((event) => {
  setVal(event.target.value);
 })
 useEffect(() =>{
   fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords='+inputVal)
   .then(res => res.json())
   .then((res)=>{
     setList(res.result.songs)
     console.log(res)
   })
   return () => {
    //  卸载
    // clearInterval()
    // document.removeEventListener()
   }
 },[inputVal,])

//  依赖 react 检查依赖里面 有没有数据发生变化，没变化 不会重新调用, 依赖是个数组
// [] 一次 componentDidMount
// [inputVal] 多次 componentDidUpdate
  return (
    <div>
      {list.length}
      <input type="text" value={inputVal} onChange={handleChange} />
    </div>
  )
}
export default Demo