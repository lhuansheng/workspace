import React from 'react'
import {CSSTransition} from 'react-transition-group'

function Order(props) {
  const {isIn} = props.match.params
  return (
    // <CSSTransition timeout={500} classNames='msg' in={isIn==='true'?true:false} >
    <div>
    Order
    </div>
    // </CSSTransition>
  )
}

export default Order
