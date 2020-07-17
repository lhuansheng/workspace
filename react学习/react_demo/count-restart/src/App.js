import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Counter from './container/Counter_container'
import Person from './container/Person_container'
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Counter} />
        <Route  path='/person' component={Person} />
      </Router>
    </div>
  );
}

export default App;
