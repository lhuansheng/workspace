import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import { NavLink, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
  <HashRouter>
     <NavLink to='/home'activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }} >Home</NavLink>
    <NavLink to='/about' activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }} style={{marginTop:'10px',marginLeft:'30px'}}>About</NavLink>
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Redirect to='/home'/>
    </Switch>
   
  </HashRouter>
  );
}

export default App;
