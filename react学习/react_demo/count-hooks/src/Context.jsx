import React, { useState, createContext, useContext } from 'react';
// import Counter from './Counter'
const Context = () => {
  const { username } = useContext(AppContext)

  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  )
}
export default Context
