import React, { Fragment, useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleState = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div style={{ border: "1px solid black", textAlign: "center", width:"250px",gap: "10px", margin:"auto", paddingBottom:"10px"}}>
       <h5 style={{textAlign:"center"}}>StateManagement</h5>
       <p>Toggle button</p>
      <button onClick={toggleState}>
      {isToggled ? 'ON' : 'OFF'}
    </button>
    </div>
  
  );
};

export default ToggleButton;
