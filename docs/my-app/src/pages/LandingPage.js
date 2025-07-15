// src/pages/LandingPage.js

import React from "react";
import { Link } from "react-router-dom";

 export default function LandingPage() {
  console.log('LandingPage component rendered');

  return (
    <div className="page-container" style={{
      backgroundColor: "#333", /* dark grey color */
      height: "100vh",
      width: "100vw",
      overflow: "auto"
    }}>
    <div className="text-blur-wrapper">
      <div className="landing">
        <h1>Paradise Nursery</h1>
        <p>Your Haven for Houseplants</p>
        <Link to="/products">
          <button style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
            Get Started
          </button>
        </Link>
      </div>
      <div className="description-container">
          <p>Escape to a lush oasis and discover your new favorite houseplants at Paradise Nursery! As your go-to destination for all things green and growing, we're dedicated to helping you bring a touch of paradise into your home.
  
            Browse our curated selection of rare and unique houseplants, carefully handpicked to thrive in any environment. From low-maintenance succulents to vibrant flowering plants, our collection has something for every plant enthusiast.
          </p>
      </div>
    </div>
  </div>
  );
 }
//

//function LandingPage() {
//  return (
//    <div>
//      <h1>Welcome to the Landing Page</h1>
//      {/* Add more content here */}
//    </div>
//  );
//}

//export default LandingPage;