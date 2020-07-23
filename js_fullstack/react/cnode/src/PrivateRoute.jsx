import React from 'react';
import authStore from './store/auth'
import { Route, Redirect } from 'react-router-dom'
{/* <PrivateRoute path='/collect' component={Collect} /> */}
function PrivateRoute(props) {
  // 怎么拿到用户授权信息
  const isLogin = authStore.isLogin
  // react-router
  const {path, component} = props
  if(!isLogin){
    return <Redirect to='/login' />
  }
  return (
    <Route path={} component={} />
  )
}
export default PrivateRoute