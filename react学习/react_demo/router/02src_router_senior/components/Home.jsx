import React from 'react'
import {Route,Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { Redirect, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Title from './Title'
import Content from './Content'
function Home({route}) {
  return (
    <div style={{marginTop:'10px'}}>
       <NavLink to='/home/title' activeStyle={{fontWeight: 'bold',color: 'red'}} >Title</NavLink>
        <NavLink to='/home/content' style={{marginLeft:'30px'}} activeStyle={{fontWeight: 'bold',color: 'red'}}>Content</NavLink>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Home
