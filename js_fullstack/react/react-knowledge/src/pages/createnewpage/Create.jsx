import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './create.css'
class Create extends Component {
  constructor(){
    super()
    this.input_value = React.createRef();
    this.state = { color:''}
  }
  handleFinished=()=>{
    let stars = JSON.parse(localStorage.getItem('stars'))||[]
    let star = {
      title: this.input_value.current.value,
      pic: '../../assets/moon.jpg',
      author: '小鱼'
    }
    stars.splice(0,0,star)
    localStorage.setItem('stars',JSON.stringify(stars))
  } 
  handleInput=(event)=>{
    if(event.target.value){
     const color= 'blue'
     this.setState({
       color
     })
    }
    else{
      this.setState({
        color:''
      })
    }
  }
  render() { 
    return ( 
    <div>
      <div className="top">
        <div className="left" ><Link to="/" className="leftmsg">取消</Link></div>
        <div className="right" onClick={this.handleFinished.bind(this)} style={{backgroundColor: this.state.color}}><Link to="/"className="rightmsg">完成</Link></div>
        
      </div>
      <div className="content">
          <div className="img-wrap">
            <img src={require('../../assets/moon.jpg')} alt="pic" className="pic"/>
          </div>
          <div className="input-wrap">
            <input type="text" className="input" placeholder='输入星球名称' ref={this.input_value} onChange={this.handleInput.bind(this)}/>
          </div>
        </div>
        
    </div> );
  }
}
 
export default Create;