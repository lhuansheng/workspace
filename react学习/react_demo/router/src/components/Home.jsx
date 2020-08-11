import React from 'react'
import {CSSTransition} from 'react-transition-group'
function Home(props) {
  console.log(props.match.params.isIn)
  const {isIn} = props.match.params

  return (
    // <CSSTransition timeout={500} classNames='msg' in={isIn==='true'?true:false} >
    <div style={{backgroundColor:'red'}}>
    Home
    </div>
    // </CSSTransition>
  )
}

export default Home
