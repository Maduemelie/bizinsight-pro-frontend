import React, { useState } from 'react';
import axios from 'axios';
import '../style/Signup.css';
import { useNavigate } from 'react-router-dom';


const Signup = ({setUserData, setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3500/api/v1/auth/signUp',
        formData
      );
      if (response.data.isLoggedIn) {
        setIsLoggedIn(true);
        // Set the user data in the state
        setUserData(response.data.user);

        // Store some data in local storage
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('email', response.data.email);
        // Add other local storage items as needed

        // Redirect to /PersonalDashboard
        navigate('/PersonalDashboard');
      }
      console.log(response.data);
      // Handle successful sign up
    } catch (error) {
      console.error(error);
      // Handle sign up error
    }
  };

  
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p className="signup-text">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
