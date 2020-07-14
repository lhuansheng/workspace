import React, { Component } from 'react';
import './contents.css'
class Contents extends Component {
  state = {  }
  render() { 
    return ( 
    <div>
    <div className="stars">
      <div className="star">
        <div className="img_warp">
      {/* <img src="" alt="" className="pic"/> */}
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
      <div className="star">
      <div><img src={require('../assets/create.png')} alt="" className="create"/></div>
      <p>创建星球</p>
      </div>
  
    </div>
    </div> );
  }
}
 
export default Contents;