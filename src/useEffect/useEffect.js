import React, { useState, useEffect } from 'react';

function MyComponent() {
 
  const [data, setData] = useState(null);

  
  useEffect(() => {
  
    const fetchData = () => {
      setTimeout(() => {
        setData('Hello Buddy');
      }, 2000); 
    };

    fetchData(); 
   
    return () => {
      
    };
  }, []); 

  return (
    <div>
      <h1>Data:</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default MyComponent;
