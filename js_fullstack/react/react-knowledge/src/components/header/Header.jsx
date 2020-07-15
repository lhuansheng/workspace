import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import  './header.css';
class Header extends Component {
  state = {  }
  render() { 
    return ( 
    <div>
      <div className="top">
      <span className="title">知识星球</span>
      <span className="iconAdd"><Link to="/createstar"><img src={require("../../assets/add.png")} alt="add" className="add"/></Link></span>
      </div>
      <div className="searchWrap">
        <i className='icon_search'><img src={require("../../assets/search.png")} alt="" className="imgSearch"/></i>
        <input type="text" className="search" placeholder="搜索用户, 星球或内容"/>
      </div>
    </div> );
  }
}
 
export default Header;