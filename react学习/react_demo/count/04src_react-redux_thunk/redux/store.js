import { createStore, applyMiddleware } from 'redux'
import {} from 'react-redux'
// 用于处理异步action
import thunk from 'redux-thunk'
import reducer from './reducers'
let store = createStore(reducer,applyMiddleware(thunk))
// 暴露store
export default store
