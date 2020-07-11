import { increment, decrement } from "../redux/action";
import { connect } from "react-redux";
import Counter from "../components/counter";
// redux 将数据 state 传到这里，返回 对象
// function mapStateToProps(state) {
//   return { count: state }; //<Counter state={count}>
// }
// let mapStateToProps= state=>({ count: state }) //<Counter state={count}>

//<Counter increment={操作状态的方法,记住，是方法，不是value}/>
// let mapDispatchToProps= dispatch =>({
//     increment: value => dispatch(increment(value)),
//     decrement: value => dispatch(decrement(value))
//   })

// 相当于 给 counter 组件传了 count, increment,decrement
export default connect(
  state=>({ count: state }),
  {increment,decrement}
  // dispatch =>({
  //   increment: value => dispatch(increment(value)),
  //   decrement: value => dispatch(decrement(value))
  // })
  )
  (Counter);
