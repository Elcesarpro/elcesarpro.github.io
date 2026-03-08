import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { contentData } from '../../data/content';
import './About.css';

const About = () => {
  const { about } = contentData;

  return (
    <section className="section about-bg" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                {about.aboutImage?.startsWith('http') || about.aboutImage?.startsWith('/') ? (
                  <img src={about.aboutImage} alt="Perfil" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                ) : (
                  <span className="placeholder-text-small">{about.aboutImage}</span>
                )}
              </div>
              <div className="experience-badge">
                <span className="exp-years">{about.badgeYears}</span>
                <span className="exp-text" style={{whiteSpace: 'pre-line'}}>{about.badgeText}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-md">
              {about.sectionTitle} <span className="text-accent">{about.sectionTitleHighlight}</span>
            </h2>
            <p className="text-lg about-description">
              {about.descriptionParagraph1}
            </p>
            <p className="about-description">
              {about.descriptionParagraph2}
            </p>
            
            <div className="skills-list">
              <h3 className="skills-title">{about.skillsTitle}</h3>
              <ul>
                {about.skillsList.map((skill, index) => (
                  <li key={index}>
                    <CheckCircle2 size={18} className="text-accent" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="#contact" className="btn btn-primary mt-4">{about.buttonText}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
