import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from './components/counter'

class App extends Component {
 
 render(){
  const {store} = this.props
   return (
     <Counter store = {store}/>
   )
 }
}

export default App;
