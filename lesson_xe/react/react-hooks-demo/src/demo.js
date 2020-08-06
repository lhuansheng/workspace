// import React, { useState, useEffect, useRef } from 'react';

// export const MyComponent = () => {
//   const [message,setMessage] = useState('initial message')
//   const [seconds, setSeconds] = useState(0)
//   const secondsRef = useRef(seconds)
//   // 闭包，声明时 为0
//   useEffect(() => {
//     setTimeout(() => {
//       setSeconds(1)
//       secondsRef.current = 1
//     }, 1000);
//     setTimeout(() => {
//       setMessage(`Total seconds: ${secondsRef.current}`)
//     }, 2000);
//   }, [])

//   return (
//     <>
//       <h3>{message}</h3>
//       <h4>{seconds}</h4>
//     </>
//   )
// }
// import React,{useState, useEffect, useRef} from 'react';
// export const MyComponent = () => {
//   const [visible, setVisible] = useState(false)

//   return (
//     <>
//       {visible && <MyChildComponent />}
//       <button onClick={()=> setVisible(!visible)}>Toggle Child component visibility</button>
//     </>
//   )
// }

// export const MyChildComponent = () => {
//   const [filter, setFilter] = useState('')
//   const [userCollection, setUserCollection] = useState([])

//   const mountedRef = useRef(false)
//   useEffect(() => {
//     mountedRef.current = true
//     return () => {
//       mountedRef.current = false
//     }
//   }, [])
//   const setSafeUserCollection = userCollection => mountedRef.current && setUserCollection(userCollection)
//   useEffect(() => {
//     setTimeout(() => {
//       fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//       .then(response => response.json())
//       // 不能做
//       .then(json => setSafeUserCollection(json))
//     }, 2500);


//   }, [filter])  

//   return (
//     <>
//       <input type="text" value={filter} onChange={(e)=>{setFilter(e.target.value)}} />
//       <ul>
//         {
//           userCollection.map((user,i)=>{
//             return (
//             <li key={i}>{user.name}</li>
//             )
//           })
//         }
//       </ul>
//     </>
//   )
// }

import React, { useState, useEffect,useReducer, memo } from 'react';
// 数据在 hooks 里面怎么走的
// useState -> context 轻量 | reducer 重 | useReducer | mobx
const userInfoReducer = (state, action) => {
  switch (action.type) {
    case 'setusername':
      return {
        ...state,
        name: action.payload
      }
      case 'setlastname':
        return {
          ...state,
          lastname: action.payload
        }
    default:
      return state
  }
}

export const MyComponent = () => {
  const [reducer, dispatch] = useReducer(userInfoReducer, {
    name: 'John',
    lastname: 'Doe'
  })
  return (
    <div>
      <h3>{reducer.name}{reducer.lastname} </h3>
      <EditUsername name={reducer.name} dispatch={dispatch} />
      <input type="text" value={reducer.lastname} 
      onChange={(e) => dispatch({
        type: 'setlastname',
        payload: e.target.value
      })}
      />
    </div>
  )
}
// 用到的props数据更新了才更新，如果props更新了
const EditUsername = memo(props => {
  console.log("Hey I'm only rerendered when name gets updated, check React.memo")
  return (
    <input type="text" value={props.name} 
    onChange={
      e=> props.dispatch({
        type:'setusername',
        payload: e.target.value
      })
    }
    />
  )
})