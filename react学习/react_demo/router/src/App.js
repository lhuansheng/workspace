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
  const [state, setState] = useState(false);
  return (
    <BrowserRouter>
    <SwitchTransition >
      <CSSTransition
        key={state ? "Goodbye, world!" : "Hello, world!"}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        classNames='fade'
      >
      <Switch>
              <Route path="/home" component={Home} />
              <Route path="/order" component={Order} />
              <Route path="/user" component={User} />
              <Redirect to="/home" />
            </Switch>
      </CSSTransition>
    </SwitchTransition>
    <Content>
          <NavLink
            to={`/home`}
            onClick={() => setState(state => !state)}
          >
            home
          </NavLink>
          <NavLink
            to={`/order`}
            onClick={() => setState(state => !state)}
          >
            order
          </NavLink>
          <NavLink
            to={`/user`}
            onClick={() => setState(state => !state)}
          >
            user
          </NavLink>
        </Content>
        
    </BrowserRouter>
  );
 }
// function App() {
//   const [isIn1, setIsIn1] = useState(false);
//   const [isIn2, setIsIn2] = useState(false);
//   const [isIn3, setIsIn3] = useState(false);
//   return (
//     <div>
//       <Header />

//       <BrowserRouter>
//         <SwitchTransition mode={"out-in"}>
//           <CSSTransition
//             addEndListener={(node, done) => {
//               node.addEventListener("transitionend", done, false);
//             }}
//             classNames="fade"
//             key={isIn1}
//           >
//             <Switch>
//               <Route path="/home" component={Home} />
//               <Route path="/order" component={Order} />
//               <Route path="/user" component={User} />
//               <Redirect to="/home" />
//             </Switch>
//           </CSSTransition>
//         </SwitchTransition>
//         <Content>
//           <NavLink
//             to={`/home`}
//             onClick={() => {
//               setIsIn1(!isIn1);
//             }}
//           >
//             home
//           </NavLink>
//           <NavLink
//             to={`/order`}
//             onClick={() => {
//               setIsIn1(!isIn1);
//             }}
//           >
//             order
//           </NavLink>
//           <NavLink
//             to={`/user`}
//             onClick={() => {
//               setIsIn1(!isIn1);
//             }}
//           >
//             user
//           </NavLink>
//         </Content>

//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
