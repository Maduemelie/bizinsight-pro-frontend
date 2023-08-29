import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../img/_217a9a8b-19be-491c-958c-4df41a08562b.jpeg';
import '../style/Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImg} alt="BizInsight Pro Logo" />Insightify
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/sales">Sales</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
