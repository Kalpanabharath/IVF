import React, { useState, useContext } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import leftarrow from "../../assets/ArrowLeft.png";
import "./Home.css";
import { SuccessContext } from "../../context/Successcontext"; // Import the SuccessContext
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { setSuccessRate } = useContext(SuccessContext); // Get the setter from context
  const [ageRange, setAgeRange] = useState("Between 30 - 34");
  const [ivfCycles, setIvfCycles] = useState(2);
  const [icsiProcedure, setIcsiProcedure] = useState(false);
  const [pgtTesting, setPgtTesting] = useState(false);
  const [medicalConditions, setMedicalConditions] = useState({
    PCOS: false,
    Endometriosis: true, // Default checked
    LowOvarianReserve: false,
    MaleFactorInfertility: false,
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSliderChange = (event, value) => {
    setIvfCycles(value);
  };

  const handleConditionChange = (condition) => {
    setMedicalConditions({
      ...medicalConditions,
      [condition]: !medicalConditions[condition],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Base success rate as a percentage (you can adjust these values based on your criteria)
    let successRate = 0;

    // Age range factor
    switch (ageRange) {
      case "Under 30":
        successRate += 50; // Example: base rate for age under 30
        break;
      case "Between 30 - 34":
        successRate += 45;
        break;
      case "Between 35 - 37":
        successRate += 35;
        break;
      case "Between 38 - 40":
        successRate += 25;
        break;
      case "Between 41 - 43":
        successRate += 15;
        break;
      case "Above 43":
        successRate += 10;
        break;
      default:
        successRate += 0;
    }

    // Number of IVF cycles factor
    successRate += ivfCycles * 5; // Add 5% for each IVF cycle as an example

    // ICSI Procedure factor
    if (icsiProcedure) {
      successRate += 10; // Example: add 10% for ICSI Procedure
    }

    // PGT Testing factor
    if (pgtTesting) {
      successRate += 15; // Example: add 15% for PGT Testing
    }

    // Medical conditions factor
    Object.keys(medicalConditions).forEach((condition) => {
      if (medicalConditions[condition]) {
        successRate -= 5; // Reduce 5% for each medical condition
      }
    });

    // Clamp the success rate between 0 and 100
    successRate = Math.min(Math.max(successRate, 0), 100);

    // Store the success rate in the context
    setSuccessRate(successRate);

    navigate("/result"); // Navigate to the /result route
  };

  return (
    <div className="home-container">
      <div className="breadcrumb">
        <span>Home /</span> <img src={leftarrow} alt="arrow" /> IVF Success Rate
        Calculator
      </div>
      <div className="form-group">
        <label className="form-label">Which age range applies to you?</label>
        <div className="radio-group one">
          {[
            "Under 30",
            "Between 30 - 34",
            "Between 35 - 37",
            "Between 38 - 40",
            "Between 41 - 43",
            "Above 43",
          ].map((range) => (
            <label key={range} className="radio-item">
              <input
                type="radio"
                name="ageRange"
                value={range}
                checked={ageRange === range}
                onChange={() => setAgeRange(range)}
              />
              <span>{range}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Number of IVF Cycles?</label>
        <Box sx={{ width: "372px", margin: "0 auto" }}>
          <Slider
            value={ivfCycles}
            onChange={handleSliderChange}
            min={1}
            max={5}
            step={1}
            marks={[
              { value: 1 },
              { value: 2 },
              { value: 3 },
              { value: 4 },
              { value: 5 },
            ]}
            valueLabelDisplay="auto"
            sx={{
              color: "#ff6f61",
              "& .MuiSlider-thumb": {
                backgroundColor: "#fff",
                border: "10px solid #ff6f61",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#ff6f61",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#ddd",
              },
              "& .MuiSlider-valueLabel": {
                backgroundColor: "#ff6f61", // Change value label background to orange
                color: "#fff", // Change text color for better visibility
                transform: "translateY(-35px)",
              },
            }}
          />
        </Box>
      </div>

      <div className="form-group">
        <label className="form-label">
          Have you undergone these procedures before?
        </label>
        <div className="radio-group inline-radio">
          <label className="radio-item">
            <span>ICSI Procedure:</span>
            <input
              type="radio"
              name="icsiProcedure"
              checked={icsiProcedure}
              onChange={() => setIcsiProcedure(true)}
            />
            <span>Yes</span>
            <input
              type="radio"
              name="icsiProcedure"
              checked={!icsiProcedure}
              onChange={() => setIcsiProcedure(false)}
            />
            <span>No</span>
          </label>
          <label className="radio-item">
            <span>PGT Testing:</span>
            <input
              type="radio"
              name="pgtTesting"
              checked={pgtTesting}
              onChange={() => setPgtTesting(true)}
            />
            <span>Yes</span>
            <input
              type="radio"
              name="pgtTesting"
              checked={!pgtTesting}
              onChange={() => setPgtTesting(false)}
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          Do you have any of these medical conditions?
        </label>
        <div className="checkbox-group">
          {Object.keys(medicalConditions).map((condition) => (
            <label key={condition} className="checkbox-item">
              <input
                type="checkbox"
                checked={medicalConditions[condition]}
                onChange={() => handleConditionChange(condition)}
              />
              <span>{condition}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="button-container">
        <button className="calculate-btn" onClick={handleSubmit}>
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Home;
