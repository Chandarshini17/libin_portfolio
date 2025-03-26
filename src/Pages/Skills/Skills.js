import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiPytest, SiBootstrap, SiSelenium, SiPostman, SiPycharm, SiNewrelic, SiMysql } from "react-icons/si";

const styles = {
  section: {
    padding: "40px 15px",
    textAlign: "center",
    background: "#fff",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "25px",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  tab: {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "500",
    background: "#f0f0f0",
    border: "none",
  },
  activeTab: {
    background: "#007bff",
    color: "#fff",
  },
  skillsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
  skillBox: {
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "140px",
    position: "relative",
    cursor: "pointer",
  },
  iconStyle: {
    fontSize: "2rem",
    marginBottom: "8px",
  },
  skillText: {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#222",
    marginBottom: "5px",
  },
  levelBadge: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#fff",
  },
};

const levelColors = {
  Novice: "#fbc02d",         // Yellow
  Basic: "#1e88e5",          // Blue
  Intermediate: "#43a047",   // Green
};

const categories = {
  "Programming Languages": [
    { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
    { name: "Java", level: "Novice", icon: <FaJava style={{ color: "#f89820" }} /> },
  ],
  "Web Development": [
    { name: "HTML5", icon: <FaHtml5 style={{ color: "#e34c26" }} /> },
    { name: "CSS3",  icon: <FaCss3 style={{ color: "#1572b6" }} /> },
    { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} /> },
  ],
  "Libraries/Frameworks": [
    { name: "React JS", icon: <FaReact style={{ color: "#61dafb" }} /> },
    { name: "Pytest", icon: <SiPytest style={{ color: "#3776AB" }} /> },
    { name: "Bootstrap", icon: <SiBootstrap style={{ color: "#7952b3" }} /> },
  ],
  "Tools/Platforms": [
    { name: "Selenium",  icon: <SiSelenium style={{ color: "#43a047" }} /> },
    { name: "Postman", icon: <SiPostman style={{ color: "#ef5b25" }} /> },
    { name: "Pycharm", icon: <SiPycharm style={{ color: "#21d789" }} /> },
    { name: "Bugzilla" },
    { name: "Newrelic", icon: <SiNewrelic style={{ color: "#008c99" }} /> },
  ],
  "Databases": [
    { name: "SQL", icon: <FaDatabase style={{ color: "#795548" }} /> },
    { name: "MySQL", icon: <SiMysql style={{ color: "#4479a1" }} /> },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Programming Languages");

  return (
    <section style={styles.section}>
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 style={styles.title}>Skills & Technologies</h2>
        <div style={styles.tabContainer}>
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              style={{
                ...styles.tab,
                ...(activeTab === category ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div style={styles.skillsGrid}>
          {categories[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              style={{
                ...styles.skillBox,
                backgroundColor: `${levelColors[skill.level]}20`, // Light Transparent BG
                boxShadow: `0 4px 15px ${levelColors[skill.level]}40`, // Glow shadow
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 20px ${levelColors[skill.level]}`, // Full Glow
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              animate={{
                scale: [1, 1.03, 1],
                transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              }}
            >
              <span
                style={{
                  ...styles.levelBadge,
                  backgroundColor: levelColors[skill.level],
                }}
              >
                {skill.level}
              </span>
              {skill.icon && skill.icon}
              <div style={styles.skillText}>{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
