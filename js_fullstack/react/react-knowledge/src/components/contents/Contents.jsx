import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './contents.css'
class Contents extends Component {
 state = { obj:[] }
  componentDidMount(){
    let obj = JSON.parse(localStorage.getItem('stars')) || []
    this.setState({
      obj
    })
  }
  render() { 
    let {obj} = this.state
    return ( 
    <div>
    <div className="stars">
      { obj.map((item,i)=>{
        return   (<div className="star" key={i}>
        <div className="img_warp">
      <img src={require('../../assets/moon.jpg')} alt="" className="pic"/>
        </div>
        <div className="title">{item.title}</div>
        <div className="author">{item.author}</div>
      </div>)
      })}
      <div className="star">
        <div className="img_warp">
      <img src={require('../../assets/moon.jpg')} alt="" className="pic"/>
        </div>
        <div className="title">react</div>
        <div className="author">小猫</div>
      </div>
      <div className="star">
        <div className="img_warp">
      {/* <img src="" alt="" className="pic"/> */}
        </div>
        <div className="title">react</div>
        <div className="author">小猫</div>
      </div>
      <Link to="/createstar" style={{textDecoration:'none'}}><div className="star">
    <div><img src={require('../../assets/create.png')} alt="" className="create"/></div>
      
      <p>创建星球</p>
      </div></Link>
  
    </div>
    </div> );
  }
}
 
export default Contents;