import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomeComponents/HomePage';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import PersonalDashboard from './components/PersonalDashboard/PersonalDashboard';

const App = () => {
  // Initialize the authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <React.StrictMode>
      <div>
        <Router>
          <Header isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route
              path="/login"
              element={
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  setUserData={setUserData}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup
                  setUserData={setUserData}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/PersonalDashboard"
              element={
                <PersonalDashboard
                  userData={userData}
                  setUserData={setUserData}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
          </Routes>
        </Router>

        <Footer />
      </div>
    </React.StrictMode>
  );
};

export default App;
