import React, { Component } from 'react';
import { connect } from 'react-redux';
import { homeListActionCreator } from '../../store/actions/home';
import axios from 'axios'
import { fromJS } from 'immutable';
class Home extends Component {
  componentDidMount() {
    this.props.fetchHomeList();
  }
  state = {  }
  render() {
    return ( <div>
      home
      length: { this.props.homeList.size }
    </div> );
  }
}
// 获取 数据
// state： 整个 store， home 页面，只要 home模块，过滤一下
// 过滤完结果（return）都会由 connect 传给你组件的 props

// 组件 里面逻辑很少
const mapStateToProps = (state) => {
  return {
    homeList: state.getIn(['home','homeList'])  // 取数据需要改变
  }
}
// 用户 操作 UI 引起页面变化
// 发起一个 action
// dispacth 行为 connect 传给 组件
const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeList() {
      axios.get('/home/home.json')
      .then(res =>{
        const homeList = res.data
        // homeList 传到 action 那一步
        // getHomeList.homeList = fromJS(homeList)
        let action = homeListActionCreator(fromJS(homeList))
      dispatch(action)
      })
     
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);