import React, { useState } from "react";

const FormExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your submission ${name} and ${email}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name here"
        ></input>
        <br />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email here"
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormExample;
