import React, { Component } from 'react';
class Drag extends Component {
  state = {
    left:0,
    top:0
  }
  handleDown = (e)=>{
    let startX = e.clientX
    let startY = e.clientY
    let obj = e.target.getBoundingClientRect()
    // 重置起点
    this.startX = startX - obj.x  // obj.left // 0
    this.startY = startY - obj.y  // 0
    // console.log(startX,startY)
    document.addEventListener('mousemove',this.handleMove)
    document.addEventListener('mouseup', this.handleUp)
  }
  handleMove = (e)=>{
    let newX = e.clientX
    let newY = e.clientY
    let diffX = newX - this.startX
    let diffY = newY - this.startY
    this.setState({
      left: diffX,
      top: diffY
    })
  }
  handleUp = ()=>{
    document.removeEventListener('mousemove',this.handleMove)
    document.removeEventListener('mouseup',this.handleUp)
  }
  render() { 
    const {left,top} = this.state
    return <h2
    style={{left,top}}
    className="dragable"
    onMouseDown={this.handleDown}
    >h2</h2>;
  }
}
class Drag2 extends Component {
  render(){
    return <p>小猫吃鱼</p>
  }
}
function withDragAble(Com){
  class withDragAble extends Component {
    state = {
      left:0,
      top:0
    }
    handleDown = (e)=>{
      let startX = e.clientX
      let startY = e.clientY
      let obj = e.target.getBoundingClientRect()
      // 重置起点
      this.startX = startX - obj.x  // obj.left // 0
      this.startY = startY - obj.y  // 0
      // console.log(startX,startY)
      document.addEventListener('mousemove',this.handleMove)
      document.addEventListener('mouseup', this.handleUp)
    }
    handleMove = (e)=>{
      let newX = e.clientX
      let newY = e.clientY
      let diffX = newX - this.startX
      let diffY = newY - this.startY
      this.setState({
        left: diffX,
        top: diffY
      })
    }
    handleUp = ()=>{
      document.removeEventListener('mousemove',this.handleMove)
      document.removeEventListener('mouseup',this.handleUp)
    }
    render() { 
      const {left,top} = this.state
      return ( 
        <div
        style={{left,top}}
        className="dragable"
        onMouseDown={this.handleDown}
        ><Com/></div>
      );
    }
    
  }
   return withDragAble
  
}
 export const WithDragAble2 = withDragAble(Drag2)
export default Drag;