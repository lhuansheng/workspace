import React,{useState,useEffect, useMemo, useRef} from 'react'
let obj = {
  0:'星期日',
  4:'星期五',
  1:'星期一'
  
}
const useClock = () => {

  const [date, setDate] = useState(new Date()) 
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])
 
 let dateStr = useMemo(() => {
 
  const day = date.getDay();
  return `${obj[day]}${date.toLocaleTimeString()}`
 }, [date])
  return dateStr;
}
// ui 分离
function Clock() {
   //  每隔一秒加一
  //  const ref = useRef(0)
  const [count, setCount] = useState(0)
   useEffect(() => {
    let timer = setInterval(() => {
    //  ref.current++
      // 永远能够拿到上一次的 state
        setCount(count=>count+1)
 
    }, 500);
   
   }, [])
 
  const date = useClock()
  return (
    <div>
      {date}
      <div>
      {count}
      </div>
    </div>
  )
}
export default Clock
