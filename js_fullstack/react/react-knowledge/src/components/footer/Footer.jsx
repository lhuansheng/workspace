import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
  state = {  }
  render() { 
    return ( 
    <div>
      <div className="footer">
        <div className="bottom">
          <div className="img_wrap">
            <img src={require('../../assets/circles.png') } alt="" className="bottom_icon"/>
          </div>
         <p className="title">星球</p>
         </div>
       
        <div className="bottom">
          <div className="img_wrap">
            <img src={require('../../assets/dialog2.png') } alt="" className="bottom_icon"/>
          </div>
         <p className="title">动态</p>
        </div>
        <div className="bottom">
          <div className="img_wrap">
            <img src={require('../../assets/ic_found_line.png') } alt="" className="bottom_icon"/>
          </div>
         <p className="title">发现</p>
        </div>
        <div className="bottom">
          <div className="img_wrap">
            <img src={require('../../assets/me.png') } alt="" className="bottom_icon"/>
          </div>
         <p className="title">我</p>
        </div>
        
      </div>
    </div> );
  }
}
 
export default Footer;