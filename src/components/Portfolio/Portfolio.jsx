import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, FileText, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { contentData } from "../../data/content";
import "./Portfolio.css";

const isYouTubeVideo = (value = "") => /youtube\.com|youtu\.be/i.test(value);
const isVideoAsset = (value = "") => isYouTubeVideo(value) || /\.(mp4|webm|ogg)$/i.test(value);

const Portfolio = () => {
  const location = useLocation();
  const [filter, setFilter] = useState("All");
  const [subFilter, setSubFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const itemsPerPage = 6;
  const { portfolio } = contentData;

  const categoryOptions = portfolio.categories.map((category) =>
    typeof category === "string" ? { name: category, subcategories: [] } : category
  );

  const getCategoryConfig = (value) => {
    const normalizedValue = value?.trim().toLowerCase();
    return (
      categoryOptions.find((category) => category.name?.trim().toLowerCase() === normalizedValue) ||
      categoryOptions[0] ||
      { name: "All", subcategories: [] }
    );
  };

  const activeCategory = getCategoryConfig(filter);

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
              {filter !== "All" && Array.isArray(activeCategory?.subcategories) && activeCategory.subcategories.length > 0 && (
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
                    <div className="portfolio-overlay">
                      {isVideoMedia && isYouTubeVideo(project.image) ? (
                        <div className="portfolio-content">
                          <span className="portfolio-category">{project.category}</span>
                          <h3 className="portfolio-title">{project.title}</h3>
                          <p className="portfolio-desc">{project.description}</p>
                          <div className="portfolio-actions">
                            <Link 
                              to={`/project/${project.id}`} 
                              className="portfolio-action-link"
                              state={{ from: `${location.pathname}${location.search}${location.hash}` }}
                            >
                              Ver detalles <ExternalLink size={16} />
                            </Link>
                            {project.pdfUrl && (
                              <button
                                type="button"
                                className="portfolio-pdf-btn"
                                onClick={(event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                                  setSelectedPdf(project);
                                }}
                              >
                                <FileText size={16} /> Abrir PDF
                              </button>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="portfolio-content">
                          <span className="portfolio-category">
                            {project.category}
                          </span>
                          <h3 className="portfolio-title">{project.title}</h3>
                          <p className="portfolio-desc">{project.description}</p>
                          <div className="portfolio-actions">
                            <Link
                              to={`/project/${project.id}`}
                              className="portfolio-action-link"
                              state={{ from: `${location.pathname}${location.search}${location.hash}` }}
                            >
                              Ver detalles <ExternalLink size={16} />
                            </Link>
                            {project.pdfUrl && (
                              <button
                                type="button"
                                className="portfolio-pdf-btn"
                                onClick={(event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                                  setSelectedPdf(project);
                                }}
                              >
                                <FileText size={16} /> Abrir PDF
                              </button>
                            )}
                          </div>
                        </div>
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

      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            className="portfolio-pdf-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              className="portfolio-pdf-modal"
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="portfolio-pdf-modal-header">
                <div>
                  <p className="portfolio-pdf-modal-kicker">Documento</p>
                  <h3>{selectedPdf.title}</h3>
                </div>
                <button type="button" className="portfolio-pdf-close" onClick={() => setSelectedPdf(null)}>
                  <X size={18} />
                </button>
              </div>
              <iframe
                src={selectedPdf.pdfUrl}
                title={selectedPdf.title}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
