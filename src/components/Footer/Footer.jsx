import React from 'react';
import { Instagram } from 'lucide-react';
import { contentData } from '../../data/content';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { siteName, navLinks, contact, footer } = contentData;
  const siteNameParts = siteName.split(' ');
  const siteNameFirst = siteNameParts.slice(0, -1).join(' ');
  const siteNameLast = siteNameParts[siteNameParts.length - 1];

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="logo">
              {siteNameFirst} <span>{siteNameLast}</span>
            </h2>
            <p className="footer-desc">
              {footer.description}
            </p>
          </div>
          
          <div className="footer-links">
            <h3>{footer.linksTitle}</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>{footer.contactTitle}</h3>
            <p><a href={contact.phoneLink}>{contact.phoneNumber}</a></p>
            <p><a href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</a></p>
            <div className="footer-socials">
              <a href={contact.instagramLink} target="_blank" rel="noreferrer">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {footer.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
