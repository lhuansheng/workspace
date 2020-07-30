import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About'
import Content from "../components/Content";
import Study from "../components/Study";
import Title from "../components/Title";
import Blanklayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'
export default [
  {
    component:Blanklayout,
    routes: [
      {
        path: '/',
        component: HomeLayout,
        routes: [
          {
            path: '/',
            exact: true,
            render: ()=> <Redirect to={'/home'} />
          },
          {
            path: '/home',
            component: Home,
            routes:[
              {
                path: '/home/title',
                component:Title,
               
              },
              {
                path:'/home/content',
                component: Content,
                routes:[
                  {
                    path: '/home/content/study/:id',
                    component: Study
                  }
                ]
              }
            ]
          },
          {
            path:'/about',
            component: About
          }
        ]
      }
    ]
  }
]