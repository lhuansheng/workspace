import React,{useContext, useEffect, useState} from 'react'
import {Color} from './App';
const Light = () => {
  const light = useContext(Color)
  const [bgc, setBgc] = useState(light.background)
  useEffect(() => {
    setBgc('aaaa')
   
  }, [])
  return (
    <div>
      {bgc}
    </div>
  )
}

export default Light
