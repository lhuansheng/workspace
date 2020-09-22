import React,{createRef, Suspense, useEffect} from 'react';
import './App.css';
import ReqDemo from './ReqDemo'

function App() {
  const ref = createRef()
  useEffect(() => {
    setTimeout(() => {
      console.log(ref.current)
    }, 6000);
  },[])
  return (
    <div>
      <Suspense fallback={<h2>正在加载中...</h2>}>
        <ReqDemo  ref={ref}/>
      </Suspense>
    </div>
  );
}

export default App;
