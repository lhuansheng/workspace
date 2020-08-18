import React from "react";
import { renderRoutes } from "react-router-config";
// 从我们刚刚配置的路由可知 这个组件是最外层组件 
const Layout = ({ route }) => <>{renderRoutes(route.routes)}</>;
export default Layout