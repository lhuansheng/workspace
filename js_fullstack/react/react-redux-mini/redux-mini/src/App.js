import React,{useEffect} from "react";
import './App.css';
import {connect} from  './react-redux'
import Clock from './useClock'

function App(props) {
  // context ?
  // connect -> mapStateToProps
  // const ctx = useContext(context)
  // console.log(ctx,props)
  useEffect(()=> {
    setTimeout(() => {
      props.inc()
    }, 2000);
    // eslint-disable-next-line
  },[])
  return (
    <div className="App">
      count: {props.count}
      <Clock />
     
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count:state
  }
}
const mapDispatchToProps = (dispatch) => {
 return {
  inc: ()=>dispatch({type:'INCREMENT'}),
  dec: ()=>dispatch({type:'DECREMENT'})
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
