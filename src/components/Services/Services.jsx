import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, PenTool, Layout, MonitorSmartphone, Music } from 'lucide-react';
import { contentData } from '../../data/content';
import './Services.css';

// Mapeo seguro de nombres de strings a componentes de iconos SVG
const IconMap = {
  Video,
  Camera,
  PenTool,
  Layout,
  MonitorSmartphone,
  Music
};

const Services = () => {
  const { services } = contentData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section services-bg" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">
            {services.sectionTitle} <span className="text-accent">{services.sectionTitleHighlight}</span>
          </h2>
          <p className="text-lg">{services.sectionDescription}</p>
        </div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.list.map(service => {
            const IconComponent = IconMap[service.iconName];
            return (
              <motion.div key={service.id} className="service-card" variants={itemVariants}>
                <div className="service-icon">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
