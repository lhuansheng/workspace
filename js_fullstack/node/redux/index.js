const {createStore,combineReducers} = require('redux')
let isLogin = false;
let posts = []
const  LOGIN_STATUS = Symbol('login/change-login-status')
const  POSTS_STATUS = Symbol('posts/change-login-status')
// 状态 reducer(纯函数)
// state 上一次的状态
// creattStore 经过 reducer 生成 store ： 状态默认值
// dispatch action 也要 reducer 生成 store: 用户触发
function loginReducer(state = isLogin,action){
  switch(action.type){
    case LOGIN_STATUS:
      return !state           // 返回 新的state, 不是修改原来的哪个变量
      default:                // default 生成状态默认值
        return state
  }
}
function postsReducer(state = posts,action){
  switch(action.type){
    case POSTS_STATUS:
      return action.newPosts   
      default:                
        return state
  }
}
// action: 纯对象 let obj = {}, type 字段，区分 这个action 干啥的，常量,整个应用唯一
// 自研状态管理库: 单向

const loginAction = {
  type: LOGIN_STATUS,
  a:1
}
const postAction = {
  type:POSTS_STATUS,
  newPosts:[{a:1},{b:2}]
}
// 分了 login posts
// 接受一个
// combineReducers 集合
const rootReducer = combineReducers({
  login:loginReducer,
  posts:postsReducer
})
// 状态存到 store
const store = createStore(rootReducer)
// mapStateToProps
console.log('now-- ',store.getState())

// action - reducer
// mapDispatchToProps
// 去到 loginReducer 或 postsReducer
store.dispatch(loginAction)
store.dispatch(postAction)
console.log('now-- ',store.getState())

// react-redux