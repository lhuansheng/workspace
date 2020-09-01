import React from 'react'

const Header = () => {
  const handleClick = () => {
    console.log(123)
  }
  return (
    <button onClick={handleClick}>
      按钮
    </button>
  )
}

export default Header
