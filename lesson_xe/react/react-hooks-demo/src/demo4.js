import React, { useState,useEffect } from 'react'

const MyComponent = () => {
  const [filter, setFilter] = useState('')
  const [userCollection, setUserCollection] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
    .then(response => response.json())
    .then(json => setUserCollection(json))
   
  }, [filter])
  return (
    <div>
      {/* github api shunwuyu repos list */}
      <input type="text" value={filter} onChange={(e)=>setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user,i)=>{
          return (
          <li key={i}>{user.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export {MyComponent}
