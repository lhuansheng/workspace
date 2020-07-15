import {ADDPERSON} from '../action_types'
let initState = [{name:'kobe',age:18},{name:'wabe',age:20}];
export default function (preState = initState, action) {
  const { type, data } = action;
  let newState;
  switch (type) {
    case ADDPERSON:
      return newState = [...preState,data];
   
    default:
      return preState;
  }
}
