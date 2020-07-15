import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Contents from './components/contents/Contents'
import Footer from './components/footer/Footer'
import Create from './pages/createnewpage/Create'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className='App'>
        
        <Switch>
        <Route path="/" exact>
        <Header />
        <Contents />
        <Footer />
          </Route>
          <Route path="/createstar">
            <Create />
          </Route>
         
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
