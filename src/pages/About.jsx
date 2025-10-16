import React from 'react';
import './About.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="about-section"
    >
      <div className="about-container">
        <h3 className="about-title">About Jarurat Care</h3>
        <p className="about-text">
          About Jarurat Care

Jarurat Care is a social initiative committed to uplifting communities by addressing their essential needs and ensuring access to healthcare, counseling, and empowerment opportunities. Rooted in the belief that every need deserves care, we strive to bridge the gap between individuals in need and the support systems that can truly make a difference — from local NGOs and healthcare providers to wellness counselors and government schemes.

At Jarurat Care, our mission is to empower lives through compassion, awareness, and accessibility. We focus especially on rural and underserved communities, where lack of information and resources often prevents individuals from seeking timely help. Through our platform, users can connect with nearby organizations, receive guidance on healthcare and hygiene, and access emotional and educational support designed to promote long-term well-being.

Our vision is to build a society where every individual feels supported, valued, and capable of living with dignity. Whether it’s through promoting mental wellness, improving healthcare awareness, or enabling women to achieve self-reliance, Jarurat Care stands as a bridge of hope — turning needs into opportunities and care into action.
        </p>
      </div>
    </motion.section>
  );
}
