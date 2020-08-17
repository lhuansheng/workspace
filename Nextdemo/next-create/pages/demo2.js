import React,{useState} from 'react'
import dynamic from 'next/dynamic'
const One = dynamic(import('./demo1'))
function demo2() {
  const [nowTime, setNowTime] = useState(Date.now())
  const btn= async()=>{
    // const moment = await import('moment')
    // setNowTime(moment(Date.now()).format())
  }
  return (
    <div>
      <div>显示时间：{nowTime} </div>
      <One />
      <div><button onClick={btn}>改变样式</button></div>
    </div>
  )
}

export default demo2
