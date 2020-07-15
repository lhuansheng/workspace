import {INCREMENT,DECREMENT} from '../action_types'

// 专门用于制造 action 对象
export const increment =(value)=> ({type:INCREMENT, data:value})
export const decrement =(value)=> ({type:DECREMENT, data:value})
export const incrementAsync = (value) =>{
  return (dispatch)=>{
    setTimeout(() => {
      dispatch(increment(value))
    }, 500);
  }
}