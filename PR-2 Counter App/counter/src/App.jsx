import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; // For custom CSS (if needed)

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 bg-warning border-dark" style={{ width: '350px' }} >
        <h2 className="text-center text-dark mb-4">Number Counter</h2>
        <div className="text-center mb-4">
          <h1 className="display-4 text-dark">{count}</h1>
        </div>

        <div className="d-flex justify-content-around mb-3">
          <button className="btn btn-success" onClick={increment}>+1</button>
          <button 
            className="btn btn-success" 
            onClick={decrement}
            disabled={count <= 0}  // Disable the button when count is 0
          >
            -1
          </button>
        </div>

        <div className="text-center">
          <button className="btn btn-info" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;

