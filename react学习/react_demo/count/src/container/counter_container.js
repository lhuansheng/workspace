import { increment, decrement } from "../redux/action";
import { connect } from "react-redux";
import Counter from "../components/counter";
export default connect(
  state=>({ count: state }), // 映射状态为 props
  {increment,decrement}) // 映射 dispatch 为 props
  (Counter);
