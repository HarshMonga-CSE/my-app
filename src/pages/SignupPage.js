import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [form, setForm] = useState({ name: '', number: '', email: '', password: '', company: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: form.name,
      number: form.number,
      email: form.email,
      password: form.password,
      company: form.company,
      image: 'https://via.placeholder.com/100' // You can replace with uploaded image URL if needed
    };

    // Save the user in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Navigate to sign in
    navigate('/signin');
  };

  return (
    <div className="form-container">
      <h2>Create Your PopX Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label>Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <label>Phone Number</label>
        <input
          name="number"
          type="text"
          placeholder="Enter your phone number"
          value={form.number}
          onChange={handleChange}
        />
        <br />
        <label>Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <label>Company Name</label>
        <input
          name="company"
          type="text"
          placeholder="Enter your company name"
          value={form.company}
          onChange={handleChange}
        />
        <br />
        <button type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
