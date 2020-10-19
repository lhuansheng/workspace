import React, { useState } from "react";
function debounce(fn, timeout) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
      // timer = null
    }, timeout);
  };
}
const App = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => {
        setInput(e.target.value)
      }} />
    </div>
  );
};

export default App;
