import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../img/logoImage.jpeg';
import '../style/Header.css';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImg} alt="" />
        BizInsight Pro
      </div>
      <nav className="navigation">
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/Sales">Sales</Link>
              </li>
              <li>
                <Link to="/Inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/Customers">Customers</Link>
              </li>
              <li>
                <Link to="/Reports">Reports</Link>
              </li>
              <li>
                <Link to="/Settings">Settings</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
