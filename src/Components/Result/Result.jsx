import React, { useContext } from "react";
import "./Result.css";
import resultpageimg from "../../assets/resultpageimg.png";
import mobileimage from "../../assets/resultmobileimg.png";
import desktopimage from "../../assets/resultdesktopimg.png";
import arrowwhite from "../../assets/arrowwhite.png";
import mobileround from "../../assets/resultpagemobileround.png";
import { SuccessContext } from "../../context/Successcontext"; // Import the SuccessContext

const Result = () => {
  const { successRate } = useContext(SuccessContext); // Access the success rate from context

  // Dynamically create the background gradient based on the success rate
  const circleBackground = `conic-gradient(#00cc66 ${successRate}% 0%, #cccccc ${successRate}% 100%)`;

  return (
    <div className="Result">
      <p>
        <span>Home / </span>
        <img src={arrowwhite} alt="arrow" />
        IVF Success Rate Calculator
        <span> / Result</span>
      </p>
      <h3>
        <picture>
          <source srcSet={resultpageimg} media="(min-width: 600px)" />
          <img src={mobileround} alt="MDN" />
        </picture>
        Your estimated IVF Success Rate is
      </h3>
      <div className="circle-container">
        <div
          className="circle"
          style={{
            background: circleBackground, // Apply the dynamic background color here
          }}
        >
          {/* Display the calculated success rate dynamically */}
          <span className="success-rate">{successRate}%</span>
        </div>
        {/* Display the success rate along with IVF cycles */}
        <p className="cycles-info">With {successRate}% Success Rate</p>
      </div>

      <div className="imagediv">
        <picture>
          <source srcSet={mobileimage} media="(max-width: 768px)" />
          <img src={desktopimage} alt="MDN" />
        </picture>
      </div>
    </div>
  );
};

export default Result;
