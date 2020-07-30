import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'

import { NavLink, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { renderRoutes } from "react-router-config";
import routes from './routes'

function App() {
  return (
  <HashRouter>
    {renderRoutes(routes)}
  </HashRouter>
  );
}

export default App;
