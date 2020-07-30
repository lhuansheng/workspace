import React from 'react'
import {renderRoutes} from 'react-router-config'
import { NavLink } from "react-router-dom";
function HomeLayout(props) {
  // console.log(props)
  const{ route} = props 
  return (
    <>
    
    {renderRoutes(route.routes)}
    </>
  )
}
export default HomeLayout