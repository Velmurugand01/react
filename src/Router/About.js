import React from 'react';
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is the About page.</p>
      <Link to="/">Home</Link>  <br/>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}

export default About;
