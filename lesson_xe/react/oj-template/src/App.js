import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Dog extends Component {
  constructor() {
    super();
    this.state = {
      isRunning: false,
      isBarking: false
    }
  }
  bark () {
    this.setState({
      isBarking: true
    })
    console.log('bark------');
  }
  run() {
    this.setState({
      isRunning: true
    })
    console.log('run');
  }
  barkAndRun () {
    this.bark();
    this.run();
    setTimeout(() => {
      this.setState({
        isRunning: false,
        isBarking: false
      }, () => {
        console.log('不叫了， 停下来了');
      });
    }, 2000)
  }
  render() {
    return (
      <div onClick={this.barkAndRun.bind(this)} ref='dg'>
        Dog
        
      </div>
    )
  }
  componentDidMount(){

  }
}
class Poem extends Component{
  componentDidMount(){
    console.log(this.p.offsetHeight)
  }
  render(){
    const {content} = this.props
    return(
      <p ref={(p)=>{this.p = p}}>
        {content}
      </p>
    )
  }
}
class Message extends Component{
  render(){
    let {count} = this.props
   return(
    <div>
      {console.log((count>0 && count <100)? count: 0)}
    </div>
   )
  }
}

function App() {
  return (
    <div className="App">
      {/* <Dog ref='dog'/> */}
      <Poem content = "addadfadfadfsada"/>
      <Message count={23}/>
    </div>
  );
}

export default App;
