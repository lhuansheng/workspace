import { fromJS } from 'immutable';
import { GET_HOME_LIST } from '../../constants';

const defaultState = fromJS({
  homeList: []
})
// reducer: 原生 js 对象 改成 
// state 已经变成 immutable 结构的
// 数据 状态
// 初始化 immutable
// 修改: immutable  concat 的特点
// 1:07:30
export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_HOME_LIST:
      const newHomeList = action.homeList
      return state.set('homeList',newHomeList)  // immutable 都类似 concat 
      // return {
      //   homeList: action.homeList
      // };
    default:
      return defaultState
  }
}