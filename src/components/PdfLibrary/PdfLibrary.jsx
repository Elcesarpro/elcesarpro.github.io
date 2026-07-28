import React, { useEffect, useMemo, useState } from 'react';
import './PdfLibrary.css';

const buildBooks = () =>
  Array.from({ length: 36 }, (_, index) => {
    const id = index + 1;
    const padded = String(id).padStart(2, '0');

    return {
      id,
      title: `Documento ${padded}`,
      subtitle: `PDF ${padded} · Biblioteca digital`,
      description: `Archivo PDF ${padded} preparado para visualizarse como un libro digital.`,
      file: `/pdfs/libro-${padded}.pdf`,
    };
  });

const PdfLibrary = () => {
  const books = useMemo(() => buildBooks(), []);
  const [activeBook, setActiveBook] = useState(null);

  useEffect(() => {
    if (!activeBook && books.length) {
      setActiveBook(books[0]);
    }
  }, [activeBook, books]);

  if (!activeBook) {
    return null;
  }

  return (
    <section className="pdf-library-section" id="pdf-library">
      <div className="container pdf-library-container">
        <div className="pdf-library-intro">
          <p className="pdf-library-kicker">Biblioteca digital</p>
          <h2>Documentos en modo libro</h2>
          <p>
            Los archivos PDF quedan alojados en la carpeta pública del proyecto y se muestran
            dentro de un visor con apariencia de libro para una lectura más cómoda.
          </p>
        </div>

        <div className="pdf-library-grid">
          <aside className="pdf-library-sidebar">
            <h3>Archivos disponibles</h3>
            <ul>
              {books.map((book) => (
                <li key={book.id} className={activeBook.id === book.id ? 'is-active' : ''}>
                  <button type="button" onClick={() => setActiveBook(book)}>
                    <span className="pdf-library-number">{book.id}</span>
                    <span className="pdf-library-meta">
                      <strong>{book.title}</strong>
                      <small>{book.subtitle}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="pdf-library-viewer">
            <div className="book-shell">
              <div className="book-spine" />
              <div className="book-page book-page--info">
                <p className="book-label">Vista estilo libro</p>
                <h3>{activeBook.title}</h3>
                <p>{activeBook.description}</p>
                <a href={activeBook.file} target="_blank" rel="noreferrer" className="book-link">
                  Abrir PDF completo
                </a>
              </div>
              <div className="book-page book-page--viewer">
                <iframe src={activeBook.file} title={activeBook.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfLibrary;
