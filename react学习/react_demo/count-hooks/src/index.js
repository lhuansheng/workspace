import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Context from './Context'
import Counter from './Counter'


const AppContext = React.createContext({});

function App() {
  return (
    <AppContext.Provider value={{
      username: 'superawesome'
    }}>
      <div className="App">
        <Context />
        <Counter />
      </div>
    </AppContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
