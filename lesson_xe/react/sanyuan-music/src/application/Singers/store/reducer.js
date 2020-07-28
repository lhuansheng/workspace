const defaultState = {
  category: "",
  alpha: "",
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  listOffset: 0, // 请求列表的偏移不是page，是个数
}

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}






























// import * as actionTypes from './constants';

// const defaultState = {
//   category: "",
//   alpha: "",
//   singerList: [],
//   enterLoading:true,
//   listOffset: 0
// }

// export default (state = defaultState, action) => {
//   switch(action.type) {
//     case actionTypes.CHANGE_ALPHA:
//       return {...state, alpha:action.data};
//     case actionTypes.CHANGE_CATOGORY:
//       return {...state, category:action.data}
//     case actionTypes.CHANGE_SINGER_LIST:
//       return {...state, singerList:action.data}
//     case actionTypes.CHANGE_LIST_OFFSET:
//       return {...state, listOffset:action.data}
//       // state.set('listOffset', action.data);
//     default:
//       return state;
//   }
// }