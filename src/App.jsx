import React, { useState} from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './components/HomeComponents/HomePage';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import PersonalDashboard from './components/PersonalDashboard';

const App = () => {
  // Initialize the authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Router>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/PersonalDashboard" element={<PersonalDashboard />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
// Dashboard
// Sales
// Inventory
// Customers
// Reports
// Settings