import React, { useState, useEffect } from 'react'

function MyComponent() {
  const [visible, setVisible] = useState(false)
  // unmount 
 
  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={()=>setVisible(!visible)}>Toggle Child Component Visibility</button>
    </>
  )
}
function MyChildComponent() {
  const [userInfo,setUserInfo] = useState({
    name:'John',
    lastname:'Done'
  })
  useEffect(() => {
    console.log('called when the component is mounted')
    // unmount
    return () => {
      console.log('Called on component unmounted, check the [] on the react use effect')
    }
  })
  return (
    <>
      <h3>
        {userInfo.name} {userInfo.lastname}
      </h3>
      <input type="text" onChange={e=>setUserInfo({...userInfo,name: e.target.value})} />
    </>
  )
}

// function MyComponent() {
//   const [useName, setUserName] = useState('')
//   // unmount 
//   useEffect(() => {
//     setTimeout(() => {
//       setUserName('小明')
//     }, 1500);
//   }, [])
//   return (
//     <>
//       <h4>{useName}</h4>
//       <input type="text" value={useName} onChange={e => setUserName(e.target.value)}/>
//     </>
//   )
// }

// function MyComponent(){
//   const [useInfo, setUserInfo] = useState({
//     name: 'John',
//     lastname:'Doe'
//   })
//   return (
//     <>
//       <h4>{useInfo.name}{useInfo.lastname}</h4>
//       <input type="text" value={useInfo.name} onChange={(e)=> setUserInfo({...useInfo,name: e.target.value})} />
//       <input type="text" value={useInfo.lastname} onChange={(e)=> setUserInfo({...useInfo,lastname: e.target.value})} />
//     </>
//   )
// }
// function MyComponent() {
//   // JSX -> dom node   jsx只是语法表达形式
//   const [myName, setMyName] = useState('John Doe')
//   return (
//     <>
//       <h4>{myName}</h4>
//       <input type="text" defaultValue={myName} onChange={(e)=> setMyName(e.target.value)} />
//     </>
//   )
// }

export default MyComponent
