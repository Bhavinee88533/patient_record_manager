import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './PatientCard.css';

export default function PatientCard({ patient, onView }) {
  return (
    <motion.div
      className="patient-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="patient-info">
        <div className="patient-name">{patient.name}</div>
        <div className="patient-details">
          <p><span className="label">Age:</span> {patient.age}</p>
          <p><span className="label">Contact:</span> {patient.contact}</p>
        </div>
      </div>

      <div className="card-actions">
        <button className="view-btn" onClick={() => onView(patient)}>
          View Details
        </button>
      </div>
    </motion.div>
  );
}
