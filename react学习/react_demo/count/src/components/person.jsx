import React, { Component } from 'react';
class Person extends Component {
  state = {  }
  add=()=>{
    const {name, age} = this.refs
    this.props.addPerson({
      name: name.value,
      age: age.value
    })
  }
  render() { 
    const {persons} = this.props
    return ( 
    <div>
      <input type="text" placeholder="输入姓名" ref="name"/>
      <input type="text" placeholder="输入年龄" ref="age"/>
      <button onClick={this.add.bind(this)}>添加</button>
      <ul>
      {persons.map((item,i)=>{
        return (
        <li key={i}>{item.name}:{item.age}</li>
        )
      })}
      {/* {console.log(persons)} */}
    </ul>
    </div> );
  }
}
 
export default Person;