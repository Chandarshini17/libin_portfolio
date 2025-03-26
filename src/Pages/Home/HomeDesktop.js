import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroMobile from "./HomeMobile";
import resumePDF from "../../documents/Libin Resume.pdf";
import libin from "../../images/libin.jpg";
import Project from "../Project/ProjectDesktop";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Icons from "../Icons";
import Footer from "../Footer/Footer";
import Experience from "../Experience/ExperienceDesktop";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
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

    if (isMobile) {
        return <HeroMobile />;
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    background: "linear-gradient(to right, #00D1D1, #4052D6, #00ADAD, #005C5C)",
                    padding: "50px 20px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Logo, Title, and Navbar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        paddingLeft: "50px",
                        paddingRight: "50px",
                    }}
                >
                    {/* Logo and Title */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ display: "flex", alignItems: "center", gap: "10px" }}
                    >
                        <h1
                            style={{
                                fontSize: "40px",
                                fontWeight: "bold",
                                color: "#fff",
                                margin: 0,
                            }}
                        >
                            Libin Chandar S
                        </h1>
                    </motion.div>

                    {/* Navbar */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                            display: "flex",
                            gap: "20px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {[
                            { name: "Home", ref: homeRef },
                            { name: "Experience", ref: experienceRef },
                            { name: "Project", ref: projectRef },
                            { name: "Skills", ref: skillsRef },
                            { name: "Contact", ref: contactRef },
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                onClick={() => handleScroll(item.ref)}
                                style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                    fontSize: "18px",
                                    position: "relative",
                                    cursor: "pointer",
                                    paddingLeft: "60px",
                                }}
                                whileHover={{ scale: 1.1, color: "#FFD700" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Main Content */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "40px",
                        width: "100%",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "50px 20px",
                    }}
                >
                    {/* Left Section: Typing Animation and Text */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{
                            maxWidth: "550px",
                            textAlign: "left",
                            color: "#fff",
                        }}
                    >
                        <h2 style={{ fontSize: "38px", fontWeight: "bold", lineHeight: "1.3" }}>
                            <TypeAnimation
                                sequence={[
                                    "Tester at Wipro", 2000,      // Text + 2s delay
                                    "Manual Testing Specialist", 2000,
                                    "Automation Testing Expert", 2000,
                                ]}
                                speed={50} // Typing speed (ms)
                                repeat={Infinity} // Loop indefinitely
                                wrapper="span" // Wrap with a span element
                            />
                        </h2>
                        <p style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.6" }}>
                            I am <b>Libin Chandar</b>, a dedicated <b>Tester at Wipro</b> with expertise in <b>Manual Testing</b> and <b>Automation Testing using Python</b>.
                            Passionate about ensuring software quality, I specialize in designing and executing test cases, identifying bugs, and optimizing testing processes.
                        </p>
                        <motion.button
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
                            transition={{ duration: 0.3 }}
                        >
                            Download Resume
                        </motion.button>
                    </motion.div>

                    {/* Right Section: Image */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                            background: "#fff",
                            borderRadius: "20px",
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <motion.img
                            src={libin}
                            alt="Libin Chandar"
                            style={{
                                width: "350px",
                                height: "450px",
                                borderRadius: "20px",
                                objectFit: "cover",
                            }}
                        />
                    </motion.div>
                </div>
            </motion.div>
            <Icons />
            <div ref={experienceRef}><Experience /></div>
            <div ref={projectRef}><Project /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
        </div>
    );
};

export default Hero;
