import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="copyright">© {new Date().getFullYear()} IGA - Prueba Técnica Full Stack</p>
          <p className="developer">
            Desarrollado por <strong>Leonel González</strong>
          </p>
        </div>

        <div className="footer-stack">
          <span>React</span>
          <span className="dot">•</span>
          <span>NestJS</span>
          <span className="dot">•</span>
          <span>MySQL</span>
          <span className="dot">•</span>
          <span>Docker</span>
        </div>
      </div>
    </footer>
  );
}