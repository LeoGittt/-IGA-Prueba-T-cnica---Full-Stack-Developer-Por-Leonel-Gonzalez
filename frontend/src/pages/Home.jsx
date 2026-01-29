import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>¡Bienvenido a IGA Academia!</h1>
        <p>Transformá tu pasión en una carrera profesional con nuestros cursos de excelencia.</p>
        <div className="hero-buttons">
          <Link to="/tienda" className="btn-primary">Ver Cursos</Link>
          <Link to="/mis-compras" className="btn-secondary">Mis Inscripciones</Link>
        </div>
      </header>

      <section className="features-section">
        <h2>¿Por qué elegir IGA?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon"></div>
            <h3>Expertos Instructores</h3>
            <p>Aprende de los mejores chefs y sommeliers de la industria.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <h3>Modalidad Flexible</h3>
            <p>Estudia a tu ritmo, desde donde quieras, con clases online en vivo.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <h3>Certificación Oficial</h3>
            <p>Obtén un título reconocido que abre puertas en el mundo gastronómico.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2026 IGA Academia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}