import React from 'react';
import './App.css';
import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Contents />
        <Footer />
        <Switch>
          <Route path="/stars">
           
          </Route>
          <Route path="/createstar">
            
          </Route>
         
         
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
