import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contentData } from "../../data/content";
import "./Portfolio.css";

const isYouTubeVideo = (value = "") => /youtube\.com|youtu\.be/i.test(value);
const isVideoAsset = (value = "") => isYouTubeVideo(value) || /\.(mp4|webm|ogg)$/i.test(value);

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [subFilter, setSubFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { portfolio } = contentData;

  const categoryOptions = portfolio.categories.map((category) =>
    typeof category === "string" ? { name: category, subcategories: [] } : category
  );
  const activeCategory = categoryOptions.find((category) => category.name === filter) || categoryOptions[0];

  // Reset page when filter or sort changes
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSubFilter("All");
    setCurrentPage(1);
  };

  const handleSubFilterChange = (newSubFilter) => {
    setSubFilter(newSubFilter);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort) => {
    setSortOrder(newSort);
    setCurrentPage(1);
  };

  const filteredProjects = portfolio.projects.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSubCategory =
      filter === "All" ||
      activeCategory.subcategories.length === 0 ||
      subFilter === "All" ||
      project.subcategory === subFilter;

    return matchesCategory && matchesSubCategory;
  });

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
          <div className="portfolio-filters-wrapper">
            <motion.div
              layout
              initial={{ opacity: 0.9, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="portfolio-filters"
            >
              {categoryOptions.map((cat) => (
                <button
                  key={cat.name}
                  className={`filter-btn ${filter === cat.name ? "active" : ""}`}
                  onClick={() => handleFilterChange(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              {filter !== "All" && activeCategory.subcategories.length > 0 && (
                <motion.div
                  key={`${filter}-subfilters`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="portfolio-subfilters"
                >
                  <button
                    className={`subfilter-btn ${subFilter === "All" ? "active" : ""}`}
                    onClick={() => handleSubFilterChange("All")}
                  >
                    Todos
                  </button>
                  {activeCategory.subcategories.map((subcat) => (
                    <button
                      key={subcat}
                      className={`subfilter-btn ${subFilter === subcat ? "active" : ""}`}
                      onClick={() => handleSubFilterChange(subcat)}
                    >
                      {subcat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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

          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${subFilter}-${sortOrder}-${currentPage}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="portfolio-grid"
            >
              {currentProjects.map((project, index) => {
                const isVideoMedia = isVideoAsset(project.image);

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96, y: -16 }}
                    transition={{ duration: 0.28, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                    key={project.id}
                    className="portfolio-item"
                  >
                    <div className="portfolio-image-placeholder">
                      {isVideoMedia && isYouTubeVideo(project.image) ? (
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
                      ) : isVideoMedia ? (
                        <video
                          src={project.image}
                          muted
                          playsInline
                          loop
                          preload="metadata"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
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
                        pointerEvents: isVideoMedia && isYouTubeVideo(project.image) ? "none" : "auto",
                      }}
                    >
                      {isVideoMedia && isYouTubeVideo(project.image) ? (
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
                );
              })}
            </motion.div>
          </AnimatePresence>

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
