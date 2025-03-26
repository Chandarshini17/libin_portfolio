import React from "react";

const ExperienceTabs = () => {
  return (
    <div className="experience-container">
      {/* Left Section */}
      <div className="experience-left">
        <h2 className="experience-title">Experience</h2>
        <h3 className="company-name">WIPRO-INFOCROSSING INC.</h3>
        <p className="job-role">Test Engineer</p>
        <p className="job-location">Coimbatore, India | Bangalore, India</p>
        <p className="job-duration">Jan 2022 – Present</p>
      </div>

      {/* Right Section */}
      <div className="experience-right">
        <ul className="job-details">
          <li>Meeting with development managers to discuss specifications.</li>
          <li>Analyzing software functionality and usability.</li>
          <li>Developing automation scripts for functional test cases.</li>
          <li>Coordinating with on-site teams for sign-off and modifications.</li>
          <li>Identifying and reporting software bugs to the development team.</li>
          <li>Executing manual and automated test procedures.</li>
          <li>Running smoke and regression tests after code changes.</li>
          <li>Generating sonar issue reports and fortify reports.</li>
          <li>Tracking bugs via New Relic for issue resolution.</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTabs;

// Styles (CSS)
const styles = `
.experience-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  margin-bottom: 10px; /* Reduce bottom space */
  padding-bottom: 10px; /* Adjust padding if needed */
  padding-left: 250px;
  padding-top: 10px;
  overflow: hidden; 
}

.experience-container:hover {
  transform: scale(1.02);
}

/* Left Section */
.experience-left {
  width: 40%;
  padding: 20px;
  background: #ffffff;
  border-right: 3px solid #0073e6;
}

.experience-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.company-name {
  font-size: 20px;
  font-weight: bold;
  color: #0073e6;
}

.job-role {
  font-size: 18px;
  font-weight: bold;
  color: #444;
}

.job-location,
.job-duration {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

/* Right Section */
.experience-right {
  width: 60%;
  padding: 20px;
}

.job-details {
  font-size: 14px;
  color: #555;
  padding-left: 15px;
}

.job-details li {
  margin-bottom: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience-container {
   flex-direction: column;
    width: 90%;
    padding-left: 5px; /* Adjust for mobile */
    padding-right: 20px;
    overflow: hidden;
  }
  .experience-left,
  .experience-right {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #0073e6;
    padding-bottom: 15px;
  }
}
`;

// Append styles to document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
