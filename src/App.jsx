
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Sales from './components/Sales';
import Inventory from './components/Inventory';
import Customers from './components/Customers';
import Reports from './components/Report';
import Settings from './components/Settings';
import Footer from './components/Footer';
// import HeroSection from './components/HeroSection'; 

/**
 * Render the main application component.
 * @returns {JSX.Element} The rendered application component.
 */
const App = () => {
  return ( 
  <div>
      {/*Use the Router component to enable routing in the application*/}
    <Router>
      {/* Render the Header component */}
      <Header />

      {/* Define the routes */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;

