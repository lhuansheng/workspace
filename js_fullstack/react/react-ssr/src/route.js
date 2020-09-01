import React from 'react';
import Home from './pages/Home/index'
import Detail from './pages/Detail/index'
import Login from './pages/Login/index'
import App from './App'
export default [
  {
    path: '/',
    component: App,
    routes:[
      {
        path:'/login',
        component: Login,
      },
      {
        path:'/detail',
        component: Detail,
      },
      {
        path:'/',
        component:Home,
      },
    ]
  }
]