import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Dashboard from './components/HomeComponents/Dashboard';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import PersonalAcountHome from './components/PersonalAcountHome';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/PersonalAcountHome" element={<PersonalAcountHome />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
