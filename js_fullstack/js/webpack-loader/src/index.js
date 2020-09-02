import React from 'react';
import ReactDOM from 'react-dom';
import Post from './post.md'
import Header from './Header.vue'
function App() {
  return (
    <h2>h2
      <div>
        <Post></Post>
        <Header></Header>
      </div>
    </h2>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
