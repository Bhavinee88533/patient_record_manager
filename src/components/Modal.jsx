import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Modal.css';

export default function Modal({ patient, onClose }) {
  if (!patient) return null;

  return (
    <div className="modal-overlay">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="modal-container"
      >
        <h3 className="modal-title">{patient.name}</h3>

        <div className="modal-details">
          <p><span className="label">Age:</span> {patient.age}</p>
          <p><span className="label">Contact:</span> {patient.contact}</p>
          {patient.email && (
            <p><span className="label">Email:</span> {patient.email}</p>
          )}
          {patient.address && (
            <p><span className="label">Address:</span> {patient.address}</p>
          )}
        </div>

        {patient.notes && (
          <p className="modal-notes">{patient.notes}</p>
        )}

        <div className="modal-actions">
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
