import React, { useState,useEffect,memo } from 'react'

const MyComponent = () => {
 const [userInfo, setUserInfo] = useState({
   name: 'John',
   lastname: 'Doe'
 })
 setTimeout(() => {
  setUserInfo({
    ...userInfo,
    name:'John'
  })
  console.log(',,,,,,,,,')
}, 2000);
 return (
   <>
   <DisplayUserName name={userInfo.name}/>
    <input 
    type="text" 
    value={userInfo.name}  
    onChange={e => setUserInfo({...userInfo,name:e.target.value})}
    />
    {/* <span>{userInfo.name}</span> */}
   </>
 )

}

export {MyComponent}

export const DisplayUserName = memo(props => {
  console.log('只在name发生改变时才更新')
  return (
  <h3>{props.name}</h3>
  )
})
