import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Briefcase, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { contentData } from '../../data/content';
import './ProjectDetail.css';

const isYouTubeVideo = (value = '') => /youtube\.com|youtu\.be/i.test(value);
const isVideoAsset = (value = '') => isYouTubeVideo(value) || /\.(mp4|webm|ogg)$/i.test(value);

const getVideoEmbedUrl = (value = '') => {
  if (!value) return '';

  if (value.includes('watch?v=')) {
    return value.replace('watch?v=', 'embed/');
  }

  if (value.includes('youtu.be/')) {
    return value.replace('youtu.be/', 'youtube.com/embed/');
  }

  return value;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { portfolio } = contentData;
  const [selectedMedia, setSelectedMedia] = useState(null);
  
  // Find the specific project by ID
  const project = portfolio.projects.find(p => p.id === parseInt(id));

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedMedia) return;

      if (event.key === 'Escape') {
        setSelectedMedia(null);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setSelectedMedia((prev) => prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : prev);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setSelectedMedia((prev) => prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia]);

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container text-center">
          <h1 className="heading-lg">Proyecto no encontrado</h1>
          <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  // Check if main image is a video
  const isMainVideo = isVideoAsset(project.image);
  const isVerticalMainVideo = Boolean(project.videoFormat === 'vertical') && isMainVideo;
  const mainVideoEmbed = isMainVideo ? getVideoEmbedUrl(project.image) : null;

  return (
    <div className="project-detail-page">
      {/* Header section with back button */}
      <div className="project-header-nav container">
        <Link to="/#portfolio" className="back-link">
          <ArrowLeft size={20} /> Volver al Portafolio
        </Link>
      </div>

      <article className="project-article">
        {/* Main Hero Media */}
        <motion.div 
          className="project-hero-media"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container">
            {isMainVideo && isYouTubeVideo(project.image) ? (
              <div className={`video-container main-video${isVerticalMainVideo ? ' video-container--vertical' : ''}`}>
                <iframe
                  src={mainVideoEmbed}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : isMainVideo ? (
              <div className={`video-container main-video${isVerticalMainVideo ? ' video-container--vertical' : ''}`}>
                <video
                  src={project.image}
                  controls
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ) : project.image.startsWith('http') || project.image.startsWith('/') ? (
              <img src={project.image} alt={project.title} className="main-project-image" />
            ) : (
              <div className="placeholder-hero">{project.image}</div>
            )}
          </div>
        </motion.div>

        {/* Project Info Section */}
        <div className="container">
          <div className="project-info-grid">
            <motion.div 
              className="project-main-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="project-category-badge">{project.category}</span>
              {project.mediaType === 'reel' && (
                <span className="portfolio-reel-badge" style={{ marginBottom: '1rem' }}>Reel</span>
              )}
              <h1 className="heading-xl project-title">{project.title}</h1>
              
              <div className="project-description-long">
                {/* Fallback to short description if longDescription is not provided */}
                {project.longDescription ? (
                  project.longDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p className="text-lg">{project.description}</p>
                )}
              </div>
            </motion.div>

            <motion.div 
              className="project-metadata-sidebar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="metadata-card">
                <h3>Detalles del Proyecto</h3>
                
                {project.client && (
                  <div className="meta-item">
                    <User size={18} className="meta-icon" />
                    <div>
                      <span className="meta-label">Cliente</span>
                      <span className="meta-value">{project.client}</span>
                    </div>
                  </div>
                )}
                
                {project.date && (
                  <div className="meta-item">
                    <Calendar size={18} className="meta-icon" />
                    <div>
                      <span className="meta-label">Fecha</span>
                      <span className="meta-value">{project.date}</span>
                    </div>
                  </div>
                )}
                
                {project.role && (
                  <div className="meta-item">
                    <Briefcase size={18} className="meta-icon" />
                    <div>
                      <span className="meta-label">Rol</span>
                      <span className="meta-value">{project.role}</span>
                    </div>
                  </div>
                )}

                {/* Optional External Link Button */}
                {project.externalLink && (
                  <a href={project.externalLink} target="_blank" rel="noreferrer" className="btn btn-primary w-100 mt-4">
                    Ver Proyecto en Vivo <ExternalLink size={18} style={{ marginLeft: '8px' }} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Conditional Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div 
            className="project-gallery section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="container">
              <h2 className="heading-md mb-4">Galería <span className="text-accent">Visual</span></h2>
              <div className="gallery-grid">
                {project.gallery.map((media, index) => {
                  const isVid = isVideoAsset(media);
                  const embedUrl = isVid ? getVideoEmbedUrl(media) : null;

                  return (
                    <button
                      key={index}
                      type="button"
                      className="gallery-item"
                      onClick={() => setSelectedMedia({ index, items: project.gallery.map((item, itemIndex) => {
                        const itemIsVid = isVideoAsset(item);
                        const itemEmbedUrl = itemIsVid ? getVideoEmbedUrl(item) : null;

                        return {
                          type: itemIsVid ? 'video' : 'image',
                          url: item,
                          embedUrl: itemEmbedUrl,
                        };
                      }) })}
                      aria-label={isVid ? `Ver video ${index + 1}` : `Ver imagen ${index + 1}`}
                    >
                      {isVid && isYouTubeVideo(media) ? (
                        <div className="video-container">
                          <iframe
                            src={embedUrl}
                            title={`${project.title} gallery video ${index}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : isVid ? (
                        <div className="video-container">
                          <video
                            src={media}
                            controls
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      ) : (
                        <img src={media} alt={`${project.title} gallery file ${index}`} className="gallery-img" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </article>

      {selectedMedia && (
        <div className="media-modal" onClick={() => setSelectedMedia(null)} role="dialog" aria-modal="true">
          <div className="media-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="media-modal-close" onClick={() => setSelectedMedia(null)} aria-label="Cerrar vista ampliada">
              <X size={20} />
            </button>

            {selectedMedia.items[selectedMedia.index].type === 'video' ? (
              <div className="video-container modal-video">
                <iframe
                  src={selectedMedia.items[selectedMedia.index].embedUrl}
                  title="Vista ampliada"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img src={selectedMedia.items[selectedMedia.index].url} alt="Vista ampliada del proyecto" className="media-modal-image" />
            )}

            {selectedMedia.items.length > 1 && (
              <>
                <button
                  className="media-nav media-nav-prev"
                  onClick={() => setSelectedMedia((prev) => prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : prev)}
                  aria-label="Ver anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="media-nav media-nav-next"
                  onClick={() => setSelectedMedia((prev) => prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : prev)}
                  aria-label="Ver siguiente"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Next/Prev simple footer */}
      <div className="project-footer bg-secondary">
        <div className="container text-center">
          <h3 className="heading-sm mb-4">¿Te interesa un proyecto similar?</h3>
          <Link to="/#contact" className="btn btn-outline">
            Hablemos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
