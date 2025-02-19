import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  // by clicking + we add up a number
  function add() {
    setCount(count + 1);
  }
  // by clicking - we subtract a number
  function sub() {
    setCount(count - 1);
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button onClick={sub} className="minus" aria-label="Decrease count">
          -
        </button>
        <h2 className="count">{count}</h2>
        <button onClick={add} className="plus" aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}

export default App;
