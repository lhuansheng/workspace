import React from 'react'
import {CSSTransition} from 'react-transition-group'

function User(props) {
  const {isIn} = props.match.params
  return (
    // <CSSTransition timeout={500} classNames='msg' in={isIn==='true'?true:false} >
    <div style={{backgroundColor:'blue'}}>
    User
    </div >
    // </CSSTransition>
  )
}

export default User
