import React,{useState,useEffect,useMemo} from 'react'
let days = {1:'星期一',2:'星期二',7:'星期日'}
const useClock = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000);
  }, [])


  const a = useMemo(() => days[date.getDay()] + date.toLocaleTimeString(), [date])
  return a
}
const date = useClock()
function Clock() {
  return (
    <div>{date}</div>
  )
} 


