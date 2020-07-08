import React from 'react';
import DragAble1, { WithDragAble2 } from './DragAble1'
import {Drag1} from './useDrag'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <DragAble1 />
    <WithDragAble2 />
    <Drag1 />
  </div>

  );
}

export default App;
