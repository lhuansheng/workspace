import { createStore, applyMiddleware } from 'redux'

// 用于处理异步action
import thunk from 'redux-thunk'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
let store = createStore(reducer
,composeWithDevTools(applyMiddleware(thunk)))
// 暴露store
export default store
