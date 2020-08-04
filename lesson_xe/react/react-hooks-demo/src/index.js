import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './demo'
function App() {
  return (

      <>
        <MyComponent />
      </>
   
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App/>,rootElement)
