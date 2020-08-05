import React,{ useEffect, useRef,useState } from 'react';
import './App.css';
import pullToRefresh from './pullDown'
import styled, { css } from 'styled-components'
const { init } = pullToRefresh()
// 标签模板
function foo(...args) {
  console.log(args)
  let str = 'insert here'
  str += args[0][0]
  str += args[1]
  str += args[0][1]
  str += args[2]
  str += args[0][2]
  return str
}
console.log(foo` i am a ${18}, i am a boy ${19} `)
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: blue;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: red;
    color: black;
  `}
`

function App() {
  const [isPrimary, setIsPrimary] = useState(false)
  const contentRef = useRef()
  const ptrRef = useRef()
  const bodyRef = useRef()
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      ptrEl: ptrRef.current,
      bodyEl: bodyRef.current,
      loadingFunction: ()=> new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve()
        }, 3000);
      })
    })
    
  }, [])
  return (
    <div className="body-wrap" ref={bodyRef}>
      {/* ptr-wrap负责移动 */}
      <div ref={ptrRef} className="ptr-wrap">
        {/* 负责动画 */}
        <div className="loading" />
      </div>
      <header ref={contentRef} className="content-wrap">
        <Button primary={isPrimary} onClick={ () => setIsPrimary(!isPrimary)} >按钮</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
