import React from 'react'
import Study from './Study'
import {Route,Switch} from 'react-router-dom'
import { Redirect, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
let studyTitle = [
  {id:1, name:'小王'},
  {id:2, name:'小粒'},
  {id:3, name:'小绘'},
]
function Content() {
  return (
    <div>
      {studyTitle.map((study)=>{
      return  <NavLink key={study.id} to={`/home/content/study/${study.id}`} activeStyle={{fontWeight: 'bold',color: 'red'}}>{study.name}</NavLink>
      })}
      {/* id 占个位置 */}
      <Route path={`/home/content/study/:id`} component={Study}/>
    </div>
  )
}

export default Content
