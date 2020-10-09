import React,{useContext} from 'react'
import Light from './light'
import {Color} from './App';
const ChangeColor = () => {
  const light = useContext(Color)
  return (
   <>
   {light.background}
   <Light />
   </>
  )
}

export default ChangeColor
