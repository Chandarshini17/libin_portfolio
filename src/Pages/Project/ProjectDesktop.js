import React, { useState } from "react";
import { motion } from "framer-motion";

const ReliefProject = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div style={styles.container}>
            {/* Heading */}
            <h2 style={styles.heading}>Project</h2>

            <div style={styles.content}>
                {/* Left Side - Text Content */}
                <div style={styles.textSection}>
                    <h3 style={styles.title}>📢 Medicare Support Services</h3>
                    <p style={styles.description}>
                        MEDICARE Member360 is an application of Wipro Infocrossing that provides member enrollments and dis-enrollments. It interacts with subsystems like member, claim, billing, and employer group subsystems.
                    </p>
                    <div style={styles.buttonGroup}>
                        <motion.button
                            style={styles.button}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => window.open("https://www.wipro.com", "_blank")}
                        >
                            🔗 Visit Website
                        </motion.button>
                        <motion.button
                            style={styles.viewMoreButton}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "▲ Hide Details" : "▼ View More"}
                        </motion.button>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div style={styles.imageSection}>
                    <motion.img
                        src="https://thumbs.dreamstime.com/b/medical-background-concept-stethoscope-doctor-desk-science-hexagon-icons-297003340.jpg"
                        alt="Medicare Support Services"
                        style={styles.image}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Extra Details Card */}
            {showMore && (
                <motion.div
                    style={styles.detailsCard}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h4 style={styles.detailsTitle}>📑 Key Details</h4>
                    <ul style={styles.detailsList}>
                        <li>
                            📌 Provides a streamlined and efficient solution for Medicare Advantage member management.
                        </li>
                        <li>
                            🏢 Utilizes Wipro’s existing Medicare Advantage suite for workflow, document management, and correspondence.
                        </li>
                        <li>
                            🔍 Identified key functionalities for a full-featured solution for Highmark.
                        </li>
                        <li>
                            ✨ Development includes Member360 Enhancements, Letter Generation, and Document Management for Highmark/360 interfaces.
                        </li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

const styles = {
    container: {
        width: "100%",
        maxWidth: "700px",
        margin: "20px auto",
        padding: "15px",
        textAlign: "center",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#222",
        marginBottom: "15px",
    },
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        background: "#fff",
        gap: "15px",
    },
    textSection: {
        flex: 1,
        textAlign: "left",
    },
    imageSection: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        maxWidth: "250px",
        height: "auto",
        borderRadius: "10px",
    },
    title: {
        fontSize: "20px",
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
        gap: "10px",
    },
    button: {
        padding: "8px 14px",
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
        padding: "8px 14px",
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

export default ReliefProject;
