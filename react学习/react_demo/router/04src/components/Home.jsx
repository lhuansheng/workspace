import React, { useState } from 'react'
import {Route,Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { Redirect, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { CSSTransition } from 'react-transition-group';
import './home.css'
function Home({route}) {
  let [isIn,setIsIn] = useState(false)
  return (
    <div style={{marginTop:'10px'}}>
      
       <NavLink to='/home/title' onClick={()=>setIsIn(!isIn)} activeStyle={{fontWeight: 'bold',color: 'red'}} >Title</NavLink>
      
        <NavLink to='/home/content' style={{marginLeft:'30px'}} activeStyle={{fontWeight: 'bold',color: 'red'}}>Content</NavLink>
        <CSSTransition timeout={2000} classNames='msg' in={isIn} onClick={()=>setIsIn(!isIn)} >
        {renderRoutes(route.routes)}
        </CSSTransition>
    </div>
  )
}

export default Home
