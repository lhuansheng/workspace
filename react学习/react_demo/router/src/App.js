import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import User from "./components/User";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
  useLocation,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  display: flex;
  justify-content: space-around;
`;
function App() {
  // const location = useLocation();
  const [state, setState] = useState(false);
  return (
    <BrowserRouter>
      <Ani />
      <Content>
        <NavLink to={`/home`} onClick={() => setState((state) => !state)}>
          home
        </NavLink>
        <NavLink to={`/order`} onClick={() => setState((state) => !state)}>
          order
        </NavLink>
        <NavLink to={`/user`} onClick={() => setState((state) => !state)}>
          user
        </NavLink>
      </Content>
    </BrowserRouter>
  );
}
function Ani() {
  const location = useLocation();
  console.log(location.key)
  return (
    <SwitchTransition>
        <CSSTransition
          key={location.key}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <Switch location={location}>
            <Route path="/home" component={Home} />
            <Route path="/order" component={Order} />
            <Route path="/user" component={User} />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </SwitchTransition>
  )
}


export default App;
