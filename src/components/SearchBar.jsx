/* eslint-disable no-unused-vars */
import React from 'react';
import './SearchBar.css';
import { motion } from 'framer-motion';

export default function SearchBar({ value, onChange }) {
  return (
    <motion.div
      className="search-bar-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="search"
        placeholder="Search patients by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </motion.div>
  );
}
