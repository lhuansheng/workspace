import React, { useState } from "react";
import './mockjs.js'
import axios from 'axios'
function ajax(config) {
  const {url,type,success,fail} = config
  const xhr = new XMLHttpRequest()
  if(type.toUpperCase()==="GET"){
    xhr.open(type,url,true)
    xhr.send()
  }
  xhr.onreadystatechange = function() {
    if(xhr.readyState!==4) return;
    if(xhr.readyState===4&&xhr.status===200) {
      success(xhr.response)
    }
    else {
      fail(xhr.status)
    }
  }
  ajax.abort = function() {
    xhr.abort()
  }
}
// 节流
function debounce(fn,timeout) {
let timer = null
 return function(...args) {
   
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      timer = null
    return fn(...args)
      
  },timeout)
 }
}

function App() {
  let [suggest,setSuggest] = useState([])
  const handleInput = debounce((e) => {
    axios({
      method:'get',
      url:'/post1',
      timeout:1
    })
    .then(res => {
      console.log(res)
      setSuggest(res.data.data)
    })
  },500)
  return (
    <div>
    <div>
    <input type='text' onChange = {handleInput}/>
    <button>搜索</button>
    </div>
    <ul>
    {
      suggest.map((res,i) => <li key={res.key}>{res.mock}</li>
      )
    }
  </ul>
    </div>
  )
}
export default App;
