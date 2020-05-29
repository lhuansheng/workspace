document.write('Hello from index.ts!');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './app';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);