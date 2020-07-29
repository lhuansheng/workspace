import React, { useState } from 'react';
import { CSSTransition} from 'react-transition-group'

function Demo() {
  const [isIn, setIsIn] = useState(true)
  // 通过类名的变化
  // 移走: *-exit 几毫秒 *-exit-active  *-exit-done
  // 移进来: *-enter 几毫秒 *-enter-active *enter-done
  return (
    <div>
      <CSSTransition timeout={2000} classNames='msg' in={isIn}>
      <div className="box"></div>
      </CSSTransition>
      <button onClick={()=>setIsIn(!isIn)}>toggle</button>
    </div>
  )
}

export default Demo
