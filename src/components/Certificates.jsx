import React, { useState, useMemo, useCallback, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATES, CERTIFICATE_CATEGORIES } from '../data/certificates';

/* ─────────────────────── helpers ─────────────────────── */
const getCategoryIcon = (cat) => {
  const map = {
    Programming: '{ }',
    Python: '🐍',
    'Web Development': '🌐',
    Cloud: '☁️',
    AI: '🤖',
    Java: '☕',
    Internship: '💼',
    Workshop: '🔬',
    Hackathon: '⚡',
    Other: '📜',
  };
  return map[cat] || '🏅';
};

/* ─────────────────────── SectionHeader ─────────────────────── */
const SectionHeader = () => (
  <div className="cert-section-header">
    <motion.p
      className="eyebrow"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Credentials & Achievements
    </motion.p>
    <motion.h2
      className="section-title text-gradient"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.08 }}
    >
      Certifications
    </motion.h2>
    <motion.p
      className="cert-section-desc"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.14 }}
    >
      {CERTIFICATES.length} verified credentials across AI, Cloud, Development &amp; more
    </motion.p>
  </div>
);

/* ─────────────────────── SearchBar ─────────────────────── */
const SearchBar = memo(({ value, onChange }) => (
  <div className="cert-search-wrapper">
    <span className="cert-search-icon" aria-hidden="true">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="9" r="6" />
        <path d="M15 15l3 3" strokeLinecap="round" />
      </svg>
    </span>
    <input
      id="cert-search"
      type="search"
      placeholder="Search certificates, skills, organizations…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="cert-search-input"
      aria-label="Search certificates"
    />
    {value && (
      <button className="cert-search-clear" onClick={() => onChange('')} aria-label="Clear search">
        ✕
      </button>
    )}
  </div>
));

/* ─────────────────────── FilterBar ─────────────────────── */
const FilterBar = memo(({ active, onSelect, counts }) => (
  <motion.div
    className="cert-filters"
    role="tablist"
    aria-label="Filter certificates by category"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {CERTIFICATE_CATEGORIES.map((cat) => (
      <button
        key={cat}
        role="tab"
        aria-selected={active === cat}
        className={`cert-filter-btn${active === cat ? ' active' : ''}`}
        onClick={() => onSelect(cat)}
      >
        <span>{getCategoryIcon(cat)}</span>
        <span>{cat}</span>
        {counts[cat] > 0 && <span className="cert-filter-count">{counts[cat]}</span>}
      </button>
    ))}
  </motion.div>
));

/* ─────────────────────── PdfPreview ─────────────────────── */
const PdfPreview = memo(({ file, title, accentColor }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="cert-preview-wrapper" style={{ '--cert-color': accentColor }}>
      {!loaded && (
        <div className="cert-preview-skeleton">
          <div className="cert-preview-skeleton-inner">
            <div className="cert-skeleton-icon">📄</div>
            <div className="cert-skeleton-bar short" />
            <div className="cert-skeleton-bar" />
            <div className="cert-skeleton-bar medium" />
          </div>
        </div>
      )}
      <iframe
        src={`${file}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
        title={`Preview of ${title}`}
        className={`cert-iframe${loaded ? ' loaded' : ''}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="cert-preview-overlay">
        <span className="cert-preview-pdf-badge">PDF</span>
      </div>
    </div>
  );
});

/* ─────────────────────── CertCard ─────────────────────── */
const CertCard = memo(({ cert, index, onClick }) => {
  return (
    <motion.article
      className="cert-card-v2"
      style={{ '--cert-color': cert.color }}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
      whileHover={{ y: -6, scale: 1.025, transition: { duration: 0.22 } }}
      layout
      aria-label={`Certificate: ${cert.title}`}
    >
      {/* Glow border */}
      <div className="cert-card-glow" aria-hidden="true" />

      {/* Preview */}
      <div className="cert-card-preview">
        <PdfPreview file={cert.file} title={cert.title} accentColor={cert.color} />
        <div className="cert-card-category-badge">
          <span>{getCategoryIcon(cert.category)}</span>
          <span>{cert.category}</span>
        </div>
      </div>

      {/* Body */}
      <div className="cert-card-body">
        <h3 className="cert-card-title">{cert.title}</h3>
        <p className="cert-card-org">{cert.organization}</p>
        <p className="cert-card-date">
          <span className="cert-card-date-icon" aria-hidden="true">📅</span>
          {cert.issueDate}
        </p>

        {/* Skills */}
        <div className="cert-card-skills" aria-label="Skills learned">
          {cert.skills.slice(0, 3).map((s) => (
            <span key={s} className="cert-skill-pill">{s}</span>
          ))}
          {cert.skills.length > 3 && (
            <span className="cert-skill-pill cert-skill-more">+{cert.skills.length - 3}</span>
          )}
        </div>

        {/* Actions */}
        <div className="cert-card-actions">
          <motion.button
            className="cert-btn cert-btn-view"
            onClick={() => onClick(cert)}
            whileTap={{ scale: 0.96 }}
            aria-label={`View ${cert.title}`}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
              <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zm0 11.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-7a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
            </svg>
            View
          </motion.button>
          <motion.a
            className="cert-btn cert-btn-download"
            href={cert.file}
            download
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.96 }}
            aria-label={`Download ${cert.title}`}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
              <path d="M10 14l-4-4h3V3h2v7h3l-4 4zm-5 2h10v1H5v-1z" />
            </svg>
            Download
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
});

/* ─────────────────────── Modal ─────────────────────── */
const CertModal = memo(({ cert, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const overlayRef = useRef(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(z + 0.25, 3));
      if (e.key === '-') setZoom((z) => Math.max(z - 0.25, 0.5));
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  const handleZoom = useCallback((delta) => {
    setZoom((z) => Math.min(Math.max(z + delta, 0.5), 3));
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    setPan({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
  };
  const handleMouseUp = () => { isDragging.current = false; };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: cert.title, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <motion.div
      ref={overlayRef}
      className="cert-modal-overlay"
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing certificate: ${cert.title}`}
    >
      <motion.div
        className="cert-modal-box"
        initial={{ scale: 0.93, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.93, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        style={{ '--cert-color': cert.color }}
      >
        {/* Header */}
        <div className="cert-modal-header">
          <div className="cert-modal-meta">
            <span className="cert-modal-org">{cert.organization}</span>
            <h2 className="cert-modal-title">{cert.title}</h2>
            <div className="cert-modal-skills">
              {cert.skills.map((s) => (
                <span key={s} className="cert-skill-pill">{s}</span>
              ))}
            </div>
          </div>
          <div className="cert-modal-header-actions">
            <button className="cert-modal-icon-btn" onClick={handleShare} aria-label="Share">
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path d="M15 14a2 2 0 00-1.41.59L6.7 10.7A2 2 0 007 10a2 2 0 00-.3-1.05l6.8-3.8A2 2 0 1013 4a2 2 0 00.3 1.05L6.5 8.85A2 2 0 005 8a2 2 0 000 4 2 2 0 001.5-.85l6.8 3.88A2 2 0 0013 16a2 2 0 104-0 2 2 0 00-2-2z" />
              </svg>
            </button>
            <a
              href={cert.file}
              download
              className="cert-modal-icon-btn"
              aria-label="Download certificate"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path d="M10 14l-4-4h3V3h2v7h3l-4 4zm-5 2h10v1H5v-1z" />
              </svg>
            </a>
            <button className="cert-modal-icon-btn cert-modal-close" onClick={onClose} aria-label="Close modal">
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Preview area */}
        <div
          className="cert-modal-preview-area"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: zoom > 1 ? 'grab' : 'default' }}
        >
          <div
            className="cert-modal-iframe-wrap"
            style={{
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              transition: isDragging.current ? 'none' : 'transform 0.2s ease',
            }}
          >
            <iframe
              src={`${cert.file}#view=FitH&toolbar=0&navpanes=0`}
              title={cert.title}
              className="cert-modal-iframe"
              loading="lazy"
            />
          </div>
        </div>

        {/* Footer nav */}
        <div className="cert-modal-footer">
          <div className="cert-modal-zoom-controls">
            <button
              className="cert-zoom-btn"
              onClick={() => handleZoom(-0.25)}
              disabled={zoom <= 0.5}
              aria-label="Zoom out"
            >−</button>
            <span className="cert-zoom-level">{Math.round(zoom * 100)}%</span>
            <button
              className="cert-zoom-btn"
              onClick={() => handleZoom(0.25)}
              disabled={zoom >= 3}
              aria-label="Zoom in"
            >+</button>
            <button
              className="cert-zoom-btn"
              onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
              aria-label="Reset zoom"
              title="Reset"
            >⟳</button>
          </div>

          <div className="cert-modal-nav">
            <button
              className="cert-nav-btn"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="Previous certificate"
            >
              ← Prev
            </button>
            <button
              className="cert-nav-btn"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Next certificate"
            >
              Next →
            </button>
          </div>

          <p className="cert-modal-hint">ESC to close · ←→ navigate · +/− zoom</p>
        </div>
      </motion.div>
    </motion.div>
  );
});

/* ─────────────────────── CertificatesGrid (show-more) ─────────────────────── */
const INITIAL_VISIBLE = 6;

const CertificatesGrid = ({ filtered, activeCategory, searchQuery, openModal, setSearchQuery, setActiveCategory }) => {
  const [showAll, setShowAll] = useState(false);

  // Collapse back when filter/search changes
  useEffect(() => { setShowAll(false); }, [activeCategory, searchQuery]);

  const isFiltering = activeCategory !== 'All' || searchQuery.trim() !== '';
  const visibleCerts = (isFiltering || showAll) ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hasMore = !isFiltering && filtered.length > INITIAL_VISIBLE;

  if (filtered.length === 0) {
    return (
      <motion.div
        className="cert-empty"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <p className="cert-empty-icon">🔍</p>
        <p className="cert-empty-text">No certificates match your search.</p>
        <button
          className="cert-btn cert-btn-view"
          onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
        >
          Clear filters
        </button>
      </motion.div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${searchQuery}-${showAll}`}
          className="cert-grid-v2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {visibleCerts.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} onClick={openModal} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View All / Show Less button */}
      {hasMore && (
        <motion.div
          className="cert-view-all-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <button
            className="cert-view-all-btn"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
          >
            {showAll ? (
              <>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true">
                  <path d="M5 13l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Show Less
              </>
            ) : (
              <>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true">
                  <path d="M5 7l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                View All {filtered.length} Certificates
              </>
            )}
          </button>
        </motion.div>
      )}
    </>
  );
};

/* ─────────────────────── Main Component ─────────────────────── */
const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalCert, setModalCert] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const filtered = useMemo(() => {
    let list = CERTIFICATES;
    if (activeCategory !== 'All') {
      list = list.filter((c) => c.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.organization.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.skills.some((s) => s.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts = {};
    CERTIFICATE_CATEGORIES.forEach((cat) => {
      counts[cat] = cat === 'All'
        ? CERTIFICATES.length
        : CERTIFICATES.filter((c) => c.category === cat).length;
    });
    return counts;
  }, []);

  const openModal = useCallback((cert) => {
    const idx = filtered.findIndex((c) => c.id === cert.id);
    setModalIndex(idx);
    setModalCert(cert);
  }, [filtered]);

  const closeModal = useCallback(() => setModalCert(null), []);

  const goToPrev = useCallback(() => {
    const prev = modalIndex - 1;
    if (prev >= 0) { setModalIndex(prev); setModalCert(filtered[prev]); }
  }, [modalIndex, filtered]);

  const goToNext = useCallback(() => {
    const next = modalIndex + 1;
    if (next < filtered.length) { setModalIndex(next); setModalCert(filtered[next]); }
  }, [modalIndex, filtered]);

  return (
    <section id="certificates" className="section section-alt">
      <div className="container">
        <SectionHeader />

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <FilterBar
          active={activeCategory}
          onSelect={setActiveCategory}
          counts={categoryCounts}
        />

        {/* Results count */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`${activeCategory}-${searchQuery}`}
            className="cert-result-count"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Showing <strong>{filtered.length}</strong> of {CERTIFICATES.length} certificates
          </motion.p>
        </AnimatePresence>

        {/* Grid with expand */}
        <CertificatesGrid
          filtered={filtered}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          openModal={openModal}
          setSearchQuery={setSearchQuery}
          setActiveCategory={setActiveCategory}
        />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalCert && (
          <CertModal
            cert={modalCert}
            onClose={closeModal}
            onPrev={goToPrev}
            onNext={goToNext}
            hasPrev={modalIndex > 0}
            hasNext={modalIndex < filtered.length - 1}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
