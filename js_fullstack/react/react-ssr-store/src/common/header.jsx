import React,{useEffect,useState} from 'react'
import axios from 'axios'
function reqAction() {
  return axios('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
}
const Header = () => {
  const [songs, setSongs] = useState(null)
  useEffect(() => {
    console.log(1)
    setSongs(()=>{return typeof window === 'object' ? window.songs:null})
    // 客户端才有 didMount 客户端请求数据回来渲染
    // reqAction().then(res => {
    //   setSongs(res.data)
    // })
  }, [])
  return (
    <div>
      Hello ,how are you guys
      {songs?.result?.songs.map((s,i)=> {
        return(
          <li key={i}>{s.name}</li>
        )
      })}
    </div>
  )
}
Header.loadData = reqAction

export default Header
