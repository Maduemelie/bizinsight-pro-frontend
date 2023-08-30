import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../img/logoImage.jpeg';
import '../style/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImg} alt="" />BizInsight Pro 
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          {/* <li><Link to="/inventory">Inventory</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
