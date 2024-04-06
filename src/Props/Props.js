// App.js
import React, { useState } from 'react';
import Counter from './Counter';

const App = () => {
  const [count, setCount] = useState(0);
  const [vary, setVary] = useState(1); 
  console.log(count);
  const increment = (amount) => {
    setCount(count + amount);
  };

  const decrement = (amount) => {
    setCount(count - amount);
   
  };

  const handleVaryChange = (event) => {
    setVary(parseInt(event.target.value));
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Counter App</h1>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        vary={vary}
        handleVaryChange={handleVaryChange}
      />
    </div>
  );
};

export default App;
