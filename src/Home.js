import React, { useState } from 'react';

function Home() {
  const [email, setEmail] = useState(''); // holds the emial input

  const handleSubmit = (e) => {
    e.preventDefault();
    // connect to backend API to pull up sql database here
    console.log("Submitted following email:", email);
  };

  return (
    <div>
        <h1>Enter Your Email</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
};

export default Home;
