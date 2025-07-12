// src/pages/LandingPage.js

import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/backgroundImage.jpg';

 export default function LandingPage() {
  console.log('LandingPage component rendered');

  return (
    <div className="page-container" style={{
      backgroundColor: "#333", /* dark grey color */
      height: "100vh",
      width: "100vw",
      overflow: "auto"
    }}>
    <div className="landing" style={{
        textAlign: "center",
        padding: "2rem",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center"
       }}>
      <h1>Paradise Nursery</h1>
      <p>Welcome to your favorite houseplant store!</p>
      <Link to="/products">
        <button style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
          Get Started
        </button>
      </Link>
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

