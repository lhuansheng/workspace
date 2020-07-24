import React from 'react';
import authStore from './store/auth'
import {  Link } from 'react-router-dom'
function Login() {
 
  return (
    <div>
       <Link to='/collect'>tocollect</Link>
      Login
      <button onClick={()=>authStore.isLogin=true}>登陆</button>
    </div>
  )
}
export default Login
