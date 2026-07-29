import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';
import { contentData } from '../../data/content';
import './Contact.css';

const Contact = () => {
  const { contact } = contentData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'audiovisual',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceLabel = {
      audiovisual: 'Producción Audiovisual',
      foto: 'Fotografía',
      grafico: 'Diseño Gráfico',
      web: 'Diseño Web',
      social: 'Social Media',
      musica: 'Producción Musical',
      otro: 'Otro'
    }[formData.service] || 'Otro';

    const message = `Hola, mi nombre es ${formData.name || '...'}. Mi correo es ${formData.email || '...'}. Estoy interesado en ${serviceLabel}. Mensaje: ${formData.message || '...'}`;
    const whatsappNumber = contact.phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md">
              {contact.sectionTitle} <br/>
              <span className="text-accent">{contact.sectionTitleHighlight}</span>
            </h2>
            <p className="text-lg contact-desc">
              {contact.sectionDescription}
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="icon-wrapper">
                  <Phone size={24} />
                </div>
                <div className="method-details">
                  <h4>{contact.phoneLabel}</h4>
                  <a href={contact.phoneLink}>{contact.phoneNumber}</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon-wrapper">
                  <Instagram size={24} />
                </div>
                <div className="method-details">
                  <h4>{contact.instagramLabel}</h4>
                  <a href={contact.instagramLink} target="_blank" rel="noreferrer">{contact.instagramHandle}</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="method-details">
                  <h4>{contact.emailLabel}</h4>
                  <a href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div className="method-details">
                  <h4>{contact.locationLabel}</h4>
                  <p>{contact.locationText}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Servicio de Interés</label>
                <select id="service" value={formData.service} onChange={handleChange}>
                  <option value="audiovisual">Producción Audiovisual</option>
                  <option value="foto">Fotografía</option>
                  <option value="grafico">Diseño Gráfico</option>
                  <option value="web">Diseño Web</option>
                  <option value="social">Social Media</option>
                  <option value="musica">Producción Musical</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Cuéntame sobre tu proyecto..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                {contact.formButtonText} <Send size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
