import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ReliefProjectMob = () => {
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden"; // Disable scrolling on entire page

        return () => {
            document.body.style.overflow = "auto"; // Re-enable scrolling when component unmounts
        };
    }, []);

    return (
        <div style={styles.container}>
            {/* Heading */}
            <h2 style={styles.heading}>Project</h2>

            {/* Image First (for Mobile) */}
            <div style={styles.imageSection}>
                <motion.img
                    src="https://thumbs.dreamstime.com/b/medical-background-concept-stethoscope-doctor-desk-science-hexagon-icons-297003340.jpg"
                    alt="Relief Radar"
                    style={styles.image}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Text Content */}
            <div style={styles.textSection}>
                <h3 style={styles.title}>📢 Medicare Support Services</h3>
                <p style={styles.description}>
                MEDICARE Member360 is an application of Wipro Infocrossing that provides member enrollments and dis-enrollments. It interacts with subsystems like member, claim, billing, and employer group subsystems.
                </p>
                <div style={styles.buttonGroup}>
                    <motion.button
                        style={styles.button}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => window.open("https://www.wipro.com", "_blank")}
                    >
                        🔗 View on GitHub
                    </motion.button>
                    <motion.button
                        style={styles.viewMoreButton}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "▲ Hide Details" : "▼ View More"}
                    </motion.button>
                </div>
            </div>

            {/* Extra Details Card */}
            {showMore && (
                <motion.div
                    style={styles.detailsCard}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h4 style={styles.detailsTitle}>📑 Key Details</h4>
                    <ul style={styles.detailsList}>
                        <li>📌 Provides a streamlined and efficient solution for Medicare Advantage member management.</li>
                        <li>🏢 Utilizes Wipro’s existing Medicare Advantage suite for workflow, document management, and correspondence.</li>
                        <li>🔍 Identified key functionalities for a full-featured solution for Highmark.</li>
                        <li>✨ Development includes Member360 Enhancements, Letter Generation, and Document Management for Highmark/360 interfaces.</li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

const styles = {
    container: {
        width: "90%",
        maxWidth: "400px",
        margin: "0 auto",
        padding: "15px",
        textAlign: "center",
        maxHeight: "100vh", // Ensures no scrolling
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: "22px",
        fontWeight: "bold",
        color: "#222",
        marginBottom: "15px",
    },
    textSection: {
        textAlign: "center",
    },
    imageSection: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "15px",
    },
    image: {
        width: "100%",
        maxWidth: "300px",
        height: "auto",
        borderRadius: "10px",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "10px",
    },
    description: {
        fontSize: "14px",
        color: "#555",
        marginBottom: "10px",
    },
    buttonGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    button: {
        padding: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#fff",
        background: "#E91E63",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        transition: "0.3s",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    },
    viewMoreButton: {
        padding: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#333",
        background: "#f5f5f5",
        border: "1px solid #ccc",
        borderRadius: "20px",
        cursor: "pointer",
        transition: "0.3s",
    },
    detailsCard: {
        marginTop: "15px",
        padding: "15px",
        backgroundColor: "rgba(0, 173, 173, 0.15)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
    },
    detailsTitle: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "10px",
    },
    detailsList: {
        paddingLeft: "20px",
        fontSize: "14px",
        color: "#555",
    },
};

export default ReliefProjectMob;
