import React, { useContext } from "react";
import DataContext from "../UseContext/Create";

function App() {
  const { isLoggedIn, login, logout,enter } = useContext(DataContext);

  return (
    <div className="App">

        <h5>Data Transfer from child component</h5>
      {isLoggedIn ? (
        <div>
        <p>{enter}</p>
        <button onClick={logout}>Logout</button>
      
        </div>
      ) : (
        <div>
          <p>{enter}</p>
          <button onClick={()=>login(1)}>Login</button>
        
      </div>

   
      )}
     
   
    </div>
  );
}

export default App;