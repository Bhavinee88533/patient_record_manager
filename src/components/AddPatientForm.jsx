import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import './AddPatientForm.css';

export default function AddPatientForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !age || !contact) {
      alert("Please fill all fields");
      return;
    }
    onAdd({ id: Date.now(), name, age: Number(age), contact });
    setName("");
    setAge("");
    setContact("");
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="add-patient-form"
    >
      <h2 className="form-title">Add New Patient</h2>

      <div className="form-grid">
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="full name"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="age"
            className="form-input"
            min="0"
          />
        </div>

        <div>
          <label htmlFor="contact">Contact Number</label>
          <input
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="contact number"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          disabled={!name || !age || !contact}
          className="submit-btn"
        >
          Add Patient
        </button>
      </div>
    </motion.form>
  );
}
