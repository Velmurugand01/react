import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    gender: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // or submit the form
  };

  return (
    <form onSubmit={handleSubmit}  style={{ border: "1px solid black", textAlign: "center", width:"300px", height:"auto",gap: "10px", margin:"auto", padding:"25px"}}>
      <div >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{marginTop:"10px",marginLeft:"10px"}}
        />
      </div>
      <div>
        <label htmlFor="age" >Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          style={{marginTop:"10px",marginLeft:"18px"}}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
          style={{marginTop:"10px",marginLeft:"10px"}}
        />
      </div>

      <div>
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          pattern="[0-9]{10}"
          required
          style={{marginTop:"10px",marginLeft:"10px"}}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          style={{marginTop:"10px"}}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div> 
      <button type="submit" style={{marginTop:"10px"}}>Submit</button>
    </form>
  );
}

export default Form;
