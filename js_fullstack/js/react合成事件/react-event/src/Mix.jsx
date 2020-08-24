import React, { Component } from 'react';
class Mix extends Component {
  state = {
    handleToggle: false
  }
  handleToggle = (e) => {
    console.log(1)
    this.setState({
      visible: !this.state.visible
    })
    e.stopPropagation()
    // 所有的事件都放到了 document 上面
    // 所有的事件统一采用的事件监听 都是一个 document.addEventListener('click')
    // 事件监听器 内部维护了 元素 和 事件 处理函数的 关系
    // e.stopPropagation(); 也是 react 自己实现的 阻止冒泡， 仅限于 都用 react 的事件 才生效
    // 合成事件： 就是react 的一套事件系统
  }
  componentDidMount() {
    document.body.addEventListener('click', () => {
      console.log(2)
      this.setState({
        visible: false
      })
    })
  }
  render() { 
    return ( <div>
      <button onClick={this.handleToggle}>toggle</button>
      <div style={{display: this.state.visible ? 'block':'none'}}>content</div>
    </div> );
  }
}
 
export default Mix;