import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, GraduationCap, LayoutDashboard } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo-link">
            <img
              src="https://iga-la.com/arg/wp-content/uploads/sites/2/2025/08/gifweb-ezgif.com-optimize.gif"
              alt="IGA Logo"
              className="navbar-logo"
            />
          </Link>
        </div>

        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Menú de navegación"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/tienda"
              className={isActive("/tienda") ? "active-link" : ""}
            >
              <BookOpen size={18} />
              Cursos
            </Link>
          </li>
          <li>
            <Link
              to="/mis-compras"
              className={isActive("/mis-compras") ? "active-link" : ""}
            >
              <GraduationCap size={18} />
              Mis Inscripciones
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className={isActive("/admin") ? "active-link" : ""}
            >
              <LayoutDashboard size={18} />
              Administrador
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
