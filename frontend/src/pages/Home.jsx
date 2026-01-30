import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO */}
      <header className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Formación Profesional</span>

          <h1>
            Convertí tu pasión en una{" "}
            <span className="highlight">carrera profesional</span>
          </h1>

          <p>
            Formación de excelencia en gastronomía, pastelería, bartending y más.
            Aprende de los mejores chefs de la industria.
          </p>

          <div className="hero-buttons">
            <Link to="/tienda" className="btn-primary">
              <span>Ver Cursos</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link to="/mis-compras" className="btn-secondary">
              Mis Inscripciones
            </Link>
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
          <span className="stat-label">Años </span>
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
        <h2>
          ¿Por qué elegir <span className="highlight">IGA</span>?
        </h2>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              👨‍🍳
            </div>
            <h3>Expertos Instructores</h3>
            <p>
              Aprende de chefs y profesionales con experiencia real en la
              industria gastronómica.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              💻
            </div>
            <h3>Modalidad Flexible</h3>
            <p>
              Clases online, contenido grabado y aprendizaje a tu propio ritmo.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              🎓
            </div>
            <h3>Certificación Oficial</h3>
            <p>
              Títulos reconocidos que te abren puertas en Argentina y el mundo.
            </p>
          </div>
        </div>
      </section>

     <section className="cta-section">
  <div className="cta-content">
    <h2>¿Listo para comenzar tu carrera?</h2>
    <p>Inscribite hoy y empezá a construir tu futuro profesional</p>
    <Link to="/tienda" className="btn-cta">
      Explorar Cursos →
    </Link>
  </div>
</section>

    </div>
  );
}
