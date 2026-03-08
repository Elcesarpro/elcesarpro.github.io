import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { contentData } from '../../data/content';
import './Hero.css';

const Hero = () => {
  const { hero } = contentData;

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="dot"></span> {hero.badgeText}
          </motion.div>
          
          <h1 className="heading-xl hero-title">
            {hero.titleLine1} <br />
            <span className="text-accent">{hero.titleLine2Highlight}</span>
          </h1>
          
          <p className="text-lg hero-description">
            {hero.description}
          </p>
          
          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              {hero.primaryButtonText} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#services" className="btn btn-outline hero-play-btn">
              <Play size={18} style={{ marginRight: '8px' }} fill="currentColor" /> {hero.secondaryButtonText}
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              {hero.heroImage?.startsWith('http') || hero.heroImage?.startsWith('/') ? (
                <img src={hero.heroImage} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div className="placeholder-text">{hero.heroImage}</div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
