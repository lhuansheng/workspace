import React, { useEffect, useState,createContext } from 'react';
import ChangeColor from './changeColor'
// 使用context
const Color = createContext()
const light = {background: "#eeeeee"}
function App() {
  
  return (
   <Color.Provider value={light}>
     <ChangeColor />
   </Color.Provider>
  );
}

export  {App,Color};
