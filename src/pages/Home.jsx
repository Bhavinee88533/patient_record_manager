import React from 'react';
import './Home.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="home-section"
    >
      <h1 className="home-title">Welcome to Jarurat Care</h1>

      <p className="home-subtitle">
        We are dedicated to improving lives by connecting individuals to essential healthcare, counseling, and support services. Our mission is to make care accessible for everyone — especially for rural and underserved communities — through a simple, responsive, and user-friendly platform designed to bring help closer to those who need it most.
      </p>

      <motion.a
        href="#patients"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="home-btn"
      >
        View Patients
      </motion.a>
    </motion.section>
  );
}
