import { increment, decrement, incrementAsync } from "../redux/actions/counter_action";
import { connect } from "react-redux";
import Counter from "../components/counter";
export default connect(
  state=>({ count: state.count, persons: state.persons }), // 映射状态为 props
  {increment,decrement,incrementAsync}) // 映射 dispatch 为 props
  (Counter);
