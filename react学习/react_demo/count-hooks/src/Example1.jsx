import React, { Component,useState,useEffect } from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
// 生命周期函数
class Example1 extends Component {
  
  state = { count:0 }
  componentDidMount(){
    console.log(`componentDidMount=> 总共点击了${this.state.count}次`)
  }
  componentDidUpdate(){
    console.log(`componentDidMount=> 总共点击了${this.state.count}次`)
  }
  render() { 
    return ( 
    <div>
       <p>总共点击了{this.state.count} 次</p>
      <button onClick={this.addCount}>点击</button>
    </div> );

  }
  addCount=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
}
// effect
 function Example(){
  const [count, setCount] = useState(0)
  const add=()=>{
    setCount(count+1)
  }

  useEffect(()=>{
    console.log(`useEffect=> 总共点击了${count}次`)
    return (()=>{
      console.log('===============')
    })
  },[count])
  return (
    <div>
    <p>总共点击了{count} 次</p>
    <button onClick={add}>点击</button>

    <Router>
      <ul>
        <li><Link to='/'>Index</Link></li>
        <li><Link to='/list'>List</Link></li>
      </ul>
      <Route exact path='/' component={Index} />
      <Route exact path='/list' component={List} />
    </Router>
  </div>
  )
 }
 function Index(){
   useEffect(()=>{
    console.log('老弟Index，你来了')
    return ()=>{
      console.log('老弟Index，你走了')
    }
   },[])
   return(
     <h2>Index</h2>
   )
 }
 function List(){
  useEffect(()=>{
    console.log('老弟List，你来了')
    return ()=>{
      console.log('老弟List，你走了')
    }
   })
  return(
    <h2>List</h2>
  )
}
export default Example;