import { Link } from "react-router-dom";
import { ChefHat, GraduationCap, Laptop } from "lucide-react";
import "./Home.css";

export default function Home() {
 
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>
            Somos la red de Capacitación gastronómica{" "}
            <span className="highlight">Más importante de américa</span>
          </h1>

          <p>Formación de excelencia con los mejores chefs de la industria.</p>

          <div className="hero-buttons">
            <Link to="/tienda" className="btn-primary">
              <span>Ver Cursos</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
            src="https://instagram.fmdz5-1.fna.fbcdn.net/v/t39.30808-6/611665803_1302815575223678_7941551342269285138_n.jpg?stp=c0.64.1536.1920a_dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzgwNDg3MzEwMzAxMzM3ODAyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE1MzZ4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=iLFrXrW1g-0Q7kNvwH6hIWE&_nc_oc=Adky-0_-yeqUtAZbAbBk6Vtp5ryF3pvnjU59TNl092QmG_3qYPgQ4iHOFFwad8DpaWk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmdz5-1.fna&_nc_gid=S_LdOoIKcWI8eZ3PRMKccQ&oh=00_AfunAfWxJ4qXyVnFYMr2UC9VCTAapGPvyIc4nkrzcD2llg&oe=69846837"
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
          <span className="stat-label">Egresados exitosos</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">25+</span>
          <span className="stat-label">Cursos disponibles</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5</span>
          <span className="stat-label">Países en Latam</span>
        </div>
      </section>

      <section className="features-section">
        <h2>
          ¿Por qué elegir <span className="highlight">IGA</span>?
        </h2>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <ChefHat size={32} strokeWidth={1.5} />
            </div>
            <h3>Expertos Instructores</h3>
            <p>
              Aprende de chefs y profesionales con experiencia real en la
              industria gastronómica internacional.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <Laptop size={32} strokeWidth={1.5} />
            </div>
            <h3>Modalidad Flexible</h3>
            <p>
              Clases online, contenido grabado y aprendizaje a tu propio ritmo
              sin sacrificar la calidad.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <GraduationCap size={32} strokeWidth={1.5} />
            </div>
            <h3>Certificación Oficial</h3>
            <p>
              Títulos reconocidos que te abren puertas laborales en Argentina y
              todo el mundo.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para comenzar tu carrera?</h2>
          <p>
            Inscribite hoy y empezá a construir tu futuro profesional en
            gastronomía
          </p>
          <Link to="/tienda" className="btn-cta">
            Explorar Cursos
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
