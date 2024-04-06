import React from 'react';

const TextInput = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"  }}>
  <form style={{ border: "1px solid black", textAlign: "center", padding: "20px", gap: "10px" }}>
   <label htmlFor="textInput" style={{ textAlign: "center", marginBottom:"10px"}}>Enter Text:</label><br /> 
    <input type="text" id="textInput" placeholder='Enter Text' required style={{  marginTop:"10px"}}/><br />
    <button type="submit" style={{ marginTop:"10px"}}>Submit</button>
  </form>
</div>

  );
}
export default TextInput;
