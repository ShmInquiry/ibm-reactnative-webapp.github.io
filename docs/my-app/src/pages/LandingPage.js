// src/pages/LandingPage.js

import React from "react";
import { Link } from "react-router-dom";

 export default function LandingPage() {
  return (
    <div className="landing" style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Paradise Nursery</h1>
      <p>Welcome to your favorite houseplant store!</p>
      <Link to="/products">
        <button style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
          Get Started
        </button>
      </Link>
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

