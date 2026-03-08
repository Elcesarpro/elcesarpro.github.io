import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contentData } from "../../data/content";
import "./Portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { portfolio } = contentData;

  // Reset page when filter or sort changes
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort) => {
    setSortOrder(newSort);
    setCurrentPage(1);
  };

  const filteredProjects =
    filter === "All"
      ? portfolio.projects
      : portfolio.projects.filter((project) => project.category === filter);

  // Ordenar los proyectos por fecha
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const dateA = new Date(a.date || '2000-01-01');
    const dateB = new Date(b.date || '2000-01-01');
    
    if (sortOrder === "newest") {
      return dateB.getTime() - dateA.getTime();
    } else {
      return dateA.getTime() - dateB.getTime();
    }
  });

  // Paginación
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const currentProjects = sortedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">
            {portfolio.sectionTitle}{" "}
            <span className="text-accent">
              {portfolio.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-lg">{portfolio.sectionDescription}</p>
        </div>

        <div className="portfolio-controls">
          <div className="portfolio-filters">
            {portfolio.categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => handleFilterChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="portfolio-sort">
            <select 
              className="sort-select" 
              value={sortOrder} 
              onChange={(e) => handleSortChange(e.target.value)}
              aria-label="Ordenar proyectos"
            >
              <option value="newest">Más Recientes</option>
              <option value="oldest">Más Antiguos</option>
            </select>
          </div>
        </div>

        <div className="portfolio-carousel-wrapper">
          {totalPages > 1 && (
            <button 
              className="carousel-arrow left-arrow"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <motion.div layout className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {currentProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="portfolio-item"
                >
                  <div className="portfolio-image-placeholder">
                    {project.image.includes("youtube.com") ||
                    project.image.includes("youtu.be") ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          project.image.includes("watch?v=")
                            ? project.image.replace("watch?v=", "embed/")
                            : project.image.includes("youtu.be/")
                              ? project.image.replace(
                                  "youtu.be/",
                                  "youtube.com/embed/",
                                )
                              : project.image
                        }
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      ></iframe>
                    ) : project.image.startsWith("http") ||
                      project.image.startsWith("/") ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <span className="image-tag">{project.image}</span>
                    )}
                  </div>
                  <div
                    className="portfolio-overlay"
                    style={{
                      pointerEvents:
                        project.image.includes("youtube.com") ||
                        project.image.includes("youtu.be")
                          ? "none"
                          : "auto",
                    }}
                  >
                    {project.image.includes("youtube.com") || project.image.includes("youtu.be") ? (
                      <div className="portfolio-content">
                        <span className="portfolio-category">{project.category}</span>
                        <h3 className="portfolio-title">{project.title}</h3>
                        <p className="portfolio-desc">{project.description}</p>
                        <Link 
                          to={`/project/${project.id}`} 
                          className="btn btn-primary" 
                          style={{ pointerEvents: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                        >
                          Ver Detalles <ExternalLink size={16} />
                        </Link>
                      </div>
                    ) : (
                      <Link to={`/project/${project.id}`} className="portfolio-content" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                        <span className="portfolio-category">
                          {project.category}
                        </span>
                        <h3 className="portfolio-title">{project.title}</h3>
                        <p className="portfolio-desc">{project.description}</p>
                        <span className="portfolio-link">
                          <ExternalLink size={20} />
                        </span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {totalPages > 1 && (
            <button 
              className="carousel-arrow right-arrow"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label="Página siguiente"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
        
        {totalPages > 1 && (
          <div className="portfolio-pagination-indicator">
            <span className="pagination-info">
              Página {currentPage} de {totalPages}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
