import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
     
      <header className="hero-section">
        <div className="hero-content">
          
          <h1>Convertí tu pasión en una <span className="highlight">carrera profesional</span></h1>
          <p>Formación de excelencia en gastronomía, pastelería, bartending y más. Aprende de los mejores chefs de la industria.</p>
          <div className="hero-buttons">
            <Link to="/tienda" className="btn-primary">
              <span>Ver Cursos</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/mis-compras" className="btn-primary">Mis Inscripciones</Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://iga-la.com/arg/wp-content/uploads/sites/2/2025/05/iga-inscripciones-scaled-e1747328330359-696x1024.png"
            alt="IGA Academia"
          />
        </div>
      </header>

     
      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-number">25+</span>
          <span className="stat-label">Años de experiencia</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">8K+</span>
          <span className="stat-label">Egresados</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">25+</span>
          <span className="stat-label">Cursos disponibles</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5</span>
          <span className="stat-label">Países</span>
        </div>
      </section>

     
      <section className="features-section">
        <h2>¿Por qué elegir <span className="highlight">IGA</span>?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Expertos Instructores</h3>
            <p>Aprende de los mejores chefs y sommeliers con experiencia internacional en la industria.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
            </div>
            <h3>Modalidad Flexible</h3>
            <p>Estudia a tu ritmo, desde donde quieras, con clases online en vivo y contenido grabado.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22,4 12,14.01 9,11.01" />
              </svg>
            </div>
            <h3>Certificación Oficial</h3>
            <p>Obtén un título reconocido que abre puertas en el mundo gastronómico nacional e internacional.</p>
          </div>
        </div>
      </section>

     
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para comenzar tu carrera?</h2>
          <p>Inscribite hoy y da el primer paso hacia tu futuro profesional</p>
          <Link to="/tienda" className="btn-cta">Explorar Cursos →</Link>
        </div>
      </section>
    </div>
  );
}