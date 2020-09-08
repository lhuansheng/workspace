import React,{useContext} from "react";
import logo from './logo.svg';
import './App.css';
import {context, connect} from  './react-redux'
import Clock from './useClock'

function App(props) {
  // context ?
  // connect -> mapStateToProps
  const ctx = useContext(context)
  console.log(ctx,props)
  return (
    <div className="App">
      <Clock />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count:state
  }
}
const mapDispatchToProps = () => {

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
