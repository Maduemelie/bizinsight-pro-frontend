// import React from 'react';
// import '../style/HeroSection.css'; // Import your CSS file for styling

// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       <img
//         src="hero-image.jpg"
//         alt="Hero"
//         className="hero-image"
//       />
//       <div className="overlay">
//         <h1 className="welcome-message">
//           Welcome to BizInsight Pro
//         </h1>
//         <button className="cta-button">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../img/heroImage.jpg';
import '../style/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img
        className="hero-image"
        src={HeroImage}
        alt="Unlock Insights for Your Business"
      />
      <div className="overlay">
        <h1 className="welcome-message">Unlock Insights for Your Business</h1>
        <div className="cta-buttons">
          <Link to="/login" className="cta-button login-button">
            Login
          </Link>
          <Link to="/signup" className="cta-button signup-button">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
