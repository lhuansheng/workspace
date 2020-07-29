import React from 'react'
import {Route,Switch} from 'react-router-dom'
import { Redirect, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Title from './Title'
import Content from './Content'
function Home() {
  return (
    <div style={{marginTop:'10px'}}>
   
      <NavLink to='/home/title' activeStyle={{fontWeight: 'bold',color: 'red'}} >Title</NavLink>
      <NavLink to='/home/content' style={{marginLeft:'30px'}} activeStyle={{fontWeight: 'bold',color: 'red'}}>Content</NavLink>
      <Switch>
      <Route path='/home/title' component={Title} />
      <Route path='/home/content' component={Content} />
      <Redirect to='/home/title' />
      </Switch>
      
    </div>
  )
}

export default Home
