import React from 'react'
import Study from './Study'
import {Route,Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { Redirect, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
let studyTitle = [
  {id:1, name:'小王'},
  {id:2, name:'小粒'},
  {id:3, name:'小绘'},
]
function Content(props) {
  const {route} = props
  console.log(props)
  return (
    <div>
      {studyTitle.map((study)=>{
      return  <NavLink key={study.id} to={`/home/content/study/${study.id}`} activeStyle={{fontWeight: 'bold',color: 'red'}}>{study.name}</NavLink>
      })}
      {/* id 占个位置 */}
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Content
