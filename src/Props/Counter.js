
import React from 'react';

const Counter = ({ count, increment, decrement, vary, handleVaryChange }) => {
  return (
    <div style={{ border: "1px solid black", textAlign: "center", width:"300px", height:"auto",gap: "10px", margin:"auto", padding:"10px"}}>
      <h2>Counter: {count}</h2>
      <input type="number" value={vary} onChange={handleVaryChange} style={{marginLeft:"5px",marginInline:"8px"}} /> <br/>
      <button onClick={() => increment(vary)}>Increment</button>  
      <button onClick={() => decrement(vary)} style={{marginLeft:"5px"}}>Decrement</button>  
    </div>
  );
};

export default Counter;
