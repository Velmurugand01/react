import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('velmurugan');
  const [password, setPassword] = useState('vel2002');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (username === 'velmurugan' && password === 'vel2002') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ border: "1px solid black", textAlign: "center", width:"300px", height:"100px",gap: "10px", margin:"auto", padding:"10px"}}>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={{margin:"auto"}}>
        <label htmlFor="textInput" style={{ textAlign: "center", marginBottom:"10px"}}> Name:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{marginLeft:"15px" ,width:"200px"}}
          />
          <label htmlFor="textInput" style={{ textAlign: "center", marginBottom:"10px"}}> PassWord:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{marginLeft:"5px",width:"180px"}}
          />
          <button onClick={handleLogin}  style={{marginTop:"10px"}}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
