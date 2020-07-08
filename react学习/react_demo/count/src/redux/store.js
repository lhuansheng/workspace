import { createStore } from 'redux'
import reducer from './reducers'
let store = createStore(reducer)
// 暴露store
export default store
