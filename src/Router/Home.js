import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page!</p>
      <Link to="/About">About</Link>  <br/>
      <Link to="/Contact">Contact</Link>
     
    </div>
  );
}

export default Home;
