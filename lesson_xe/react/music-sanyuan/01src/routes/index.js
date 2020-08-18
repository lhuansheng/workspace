import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";

// 路由懒加载
const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}
// 组件懒加载
const RecommendComponent = lazy(() => import("../application/Recommend/"));

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomeLayout,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/recommend"} />,
          },
          {
            path: "/recommend",
            component:  SuspenseComponent(RecommendComponent),
          },
        ],
      },
    ],
  },
];
