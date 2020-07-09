import React, { Component } from "react";
import {increment, decrement} from '../redux/action'
class Counter extends Component{
  constructor() {
    super();
  }
  increment = () => {
    const { select_number } = this.refs;
    this.props.store.dispatch(increment(select_number.value*1))
  };
  decrement = () => {
    const { select_number } = this.refs;
    this.props.store.dispatch(decrement(select_number.value*1))
  };
  incrementIfOdd = () => {
    const  count  = this.props.store.getState();
    // console.log(count, count % 2)
    if (count % 2 !== 0 ) {
      const { select_number } = this.refs;
      this.props.store.dispatch(increment(select_number.value*1))

      // this.setState({
      //   count: count + select_number.value * 1,
      // });
    }
  };
  incrementAsync = () => {
    setTimeout(() => {
      const { select_number } = this.refs;
    this.props.store.dispatch(increment(select_number.value*1))

    }, 500);
  };
  render() {
    // let { count } = this.state;
    return (
      <div className="App">
        <p>counter: { this.props.store.getState()}</p>
        <select ref="select_number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}

export default Counter