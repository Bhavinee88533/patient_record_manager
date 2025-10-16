/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="header"
    >
      <div className="header-container">
        <div className="logo">Jarurat Care</div>

        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#patients" className="nav-link">
            Patients
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
