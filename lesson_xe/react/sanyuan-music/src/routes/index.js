/* 路由的本质是什么?
 路由级别的页面
 二级路由

 */
import React from 'react';
import {Redirect} from 'react-router-dom';
import Recommend from '../application/Recommend';
import BlankLayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'
export default [{
  component: BlankLayout,
  routes:[
    {
      path:'/',
      component: HomeLayout,
      routes:[
        {
          path:'/',
          exact: true,
          render: () => <Redirect to={'/recommend'} />
        },
        {
          path: '/recommend',
          component: Recommend
        },
        // {
        //   path: '/singers',
        //   component: SingersComponent
        // },
        // {
        //   path: '/rank',
        //   component: RankComponent
        // },
      ]
    }
  ]
}]