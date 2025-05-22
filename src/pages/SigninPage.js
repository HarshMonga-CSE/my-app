import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

const handleSubmit = (e) => {
  e.preventDefault();

  // Retrieve name from existing localStorage data (from signup)
  const savedUser = JSON.parse(localStorage.getItem('user')) || {};

  const userData = {
    name: savedUser.name || 'User',
    email: credentials.email,
    image: savedUser.image || 'https://via.placeholder.com/100'
  };

  localStorage.setItem('user', JSON.stringify(userData));
  navigate('/account-settings');
};
  
  return (
    <div className="form-container">
      <h2>Sign In to your PopX Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SigninPage;
