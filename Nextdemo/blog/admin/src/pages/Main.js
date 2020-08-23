import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'
const Main = () => {
  return (
   <Router>
     <Switch>
     <Route path="/index/" component={AdminIndex} />
     <Route path='/' exact component={Login} />
     </Switch>
     
   </Router>
  )
}

export default Main
