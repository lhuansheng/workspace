import React, { Component } from "react";


import Counter_container from './container/counter_container'
import Person_container from './container/person_container'
class App extends Component {
 render(){
   return (
     <div>
       <h2>Count 组件</h2>
       <Counter_container />
       <hr/>
       <h2>Person 组件</h2>
     <Person_container /></div>
   )
 }
}
export default App;
