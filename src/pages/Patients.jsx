import React, { useEffect, useState } from "react";
import "./Patients.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import AddPatientForm from "../components/AddPatientForm";
import PatientCard from "../components/PatientCard";
import Modal from "../components/Modal";

const mapUserToPatient = (user) => ({
  id: user.id,
  name: user.name,
  age: 20 + (user.id % 40),
  contact: user.phone,
  email: user.email,
  address: `${user.address.suite}, ${user.address.street}, ${user.address.city}`,
  notes: `Company: ${user.company.name}`,
});

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setPatients(data.map(mapUserToPatient));
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch patients");
        setLoading(false);
      });
  }, []);

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleAdd = (p) => setPatients((prev) => [p, ...prev]);

  return (
    <motion.section
      id="patients"
      className="patients-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="patients-topbar">
        <SearchBar value={query} onChange={setQuery} />
        <div className="add-form">
          <AddPatientForm onAdd={handleAdd} />
        </div>
      </div>

      {loading && (
        <motion.div
          className="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading patients...
        </motion.div>
      )}

      {error && (
        <motion.div
          className="error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      )}

      {!loading && !error && (
        <motion.div layout className="patients-grid">
          {filtered.map((p) => (
            <PatientCard key={p.id} patient={p} onView={setSelected} />
          ))}
        </motion.div>
      )}

      <Modal patient={selected} onClose={() => setSelected(null)} />
    </motion.section>
  );
}
