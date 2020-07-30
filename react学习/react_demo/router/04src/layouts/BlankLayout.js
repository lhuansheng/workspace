import React from 'react'
import {renderRoutes} from 'react-router-config'
import { Redirect, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
const Layout = (props) => {
  const {route} = props
  // console.log(props)
  return (
    <>
    <NavLink to='/home' activeStyle={{fontWeight: 'bold',color: 'red'}}>Home</NavLink>
    <NavLink to='/about' activeStyle={{fontWeight: 'bold',color: 'red'}}>About</NavLink>
    {/* 所有的路由都放到如下 */}
    {renderRoutes(route.routes)}
    </>
  )
}

export default Layout;