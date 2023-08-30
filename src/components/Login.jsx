import React from 'react';
import '../style/Login.css'

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p className="signup-text">
        Don't have an account? <a href="/signup">signup</a>.
      </p>
    </div>
  );
};

export default LoginPage;
