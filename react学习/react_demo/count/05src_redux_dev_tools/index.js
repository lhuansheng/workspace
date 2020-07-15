import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
,
document.getElementById('root')
);

// store.subscribe(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <App store={store}/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// })



