import React, { useEffect, useState } from 'react';
// 显示时钟
function App() {
  const [time, setTime] = useState('北京时间:00')
  useEffect(() => {
    setInterval(() => {
      let date = new Date()
      let year = date.getFullYear()
      let mounth = date.getMonth() + 1
      let day = date.getDate()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
      setTime(`北京时间: ${year}/${mounth}/${day} ${hour}:${minute}:${second}`)
    }, 1000);
  
  }, [])
  return (
    <div className="App">
      {/* 北京时间：2020/9/30 21:18 */}
      {time}
    </div>
  );
}

export default App;
