import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  // by clicking + we add up a number
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  // by clicking - we subtract a number
  function sub() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <main className="container">
      <h1>How many times you can CLICK, are you on the + side or - side?</h1>
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
