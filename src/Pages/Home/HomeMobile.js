import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import Typical from "react-typical";
import resumePDF from "../../documents/Libin Resume.pdf";
import libin from "../../images/libin.jpg";
import Project from "../Project/ProjectDesktop";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Icons from "../Icons";
import Footer from "../Footer/Footer";
import Experience from "../Experience/ExperienceDesktop";

const HeroMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const experienceRef = useRef(null);

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
            setMenuOpen(false); // Close menu after clicking
        }
    };

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = resumePDF;
        link.download = "Libin_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div
                style={{
                    background: "linear-gradient(to right, #00D1D1, #4052D6, #00ADAD, #005C5C)",
                    padding: "30px 15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                {/* Logo and Navbar */}
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        {/* <img src={logo} alt="Lexiontech Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /> */}
                        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#fff", margin: 0 }}>Libin Chandar S</h1>
                    </div>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: "24px" }}
                    >
                        {!menuOpen && <FaBars />}
                    </button>
                </div>

                {/* Sidebar Menu */}
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        right: menuOpen ? "0" : "-250px", // Moves in and out
                        width: "250px",
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "20px 0",
                        gap: "15px",
                        transition: "right 0.3s ease-in-out", // Smooth slide-in effect
                        zIndex: "1000",
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "#fff",
                            fontSize: "20px",
                            cursor: "pointer",
                            alignSelf: "flex-end",
                            marginRight: "15px",
                        }}
                    >
                        ✖
                    </button>

                    <a onClick={() => handleScroll(homeRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer" }}>Home</a>
                    <a onClick={() => handleScroll(experienceRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer" }}>Experience</a>
                    <a onClick={() => handleScroll(projectRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer" }}>Project</a>
                    <a onClick={() => handleScroll(skillsRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer" }}>Skills</a>
                    <a onClick={() => handleScroll(contactRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer" }}>Contact</a>
                </div>

                {/* Profile Image */}
                <div style={{ marginTop: "20px" }}>
                    <img src={libin} alt="Illustration" style={{
                        width: "90%",
                        maxWidth: "400px",
                        borderRadius: "50px",
                        height: "auto"
                    }} />
                </div>

                {/* Main Content */}
                <div style={{ maxWidth: "90%" }}>
                    <h4 style={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}>HELLO</h4>
                    <h2 style={{ fontSize: "38px", fontWeight: "bold", lineHeight: "1.3" }}>
                                                <Typical
                                                    steps={[
                                                        "Tester at Wipro", 2000,
                                                        "Manual Testing Specialist", 2000,
                                                        "Automation Testing Expert", 2000,
                                                    ]}
                                                    loop={Infinity}
                                                    wrapper="span"
                                                />
                                            </h2>
                    <p style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.6" }}>
                            I am <b>Libin Chandar</b>, a dedicated <b>Tester at Wipro</b> with expertise in <b>Manual Testing</b> and <b>Automation Testing using Python</b>.
                            Passionate about ensuring software quality, I specialize in designing and executing test cases, identifying bugs, and optimizing testing processes.
                        </p>
                    <button
                        onClick={handleResumeDownload}
                        style={{
                            marginTop: "25px",
                            padding: "12px 24px",
                            background: "#ff6f61",
                            border: "none",
                            borderRadius: "30px",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#fff",
                            cursor: "pointer",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            transition: "background 0.3s",
                        }}
                        whileHover={{
                            scale: 1.05,
                            background: "#ff3b2f",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                            e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        Resume Download
                    </button>
                </div>

            </div>
            <Icons />
            <Experience />
            <div ref={projectRef}><Project /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
        </div>
    );
};

export default HeroMobile;
