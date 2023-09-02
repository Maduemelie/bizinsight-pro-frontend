import React, { useState } from 'react';
import '../style/Login.css';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      'http://localhost:3500/api/v1/auth/login',
      formData
    );
    console.log(response.data);
    
    
   navigate('/PersonalAcountHome');
  } catch (error) {
    console.error(error);
    // Handle login error
  }
};

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p className="signup-text">
        Don't have an account? <a href="/signup">signup</a>.
      </p>
    </div>
  );
};

export default LoginPage;
