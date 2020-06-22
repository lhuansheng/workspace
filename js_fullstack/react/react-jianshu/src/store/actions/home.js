import { GET_HOME_LIST } from '../constants'
import { fromJS } from 'immutable'
// 一个 action 应该是一个对象
// {
//   type: 'GET_HOME_LIST',
//   xxx: 
// }
// redux 中间件：不同的 action， 
// redux-thunk：函数
// export const getHomeList = () => {
//   console.log(1);
// }
export const homeListActionCreator =(homeList)=> ({
  type: GET_HOME_LIST,
  homeList
})
// 
// dispatch({

// })
// dispatch(function() {
//   axios.,,,
// })