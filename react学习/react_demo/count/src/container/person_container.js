import { addPerson } from "../redux/actions/person_action";
import { connect } from "react-redux";
import Person from "../components/person";
export default connect(
  state=>({ persons: state.persons }), // 映射状态为 props
  {addPerson}) // 映射 dispatch 为 props
  (Person);
