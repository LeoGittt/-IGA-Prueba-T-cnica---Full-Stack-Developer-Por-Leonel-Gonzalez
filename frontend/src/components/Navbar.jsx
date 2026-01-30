import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
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

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/tienda" onClick={() => setIsOpen(false)}>Tienda</Link>
          </li>
          <li>
            <Link to="/mis-compras" onClick={() => setIsOpen(false)}>Mis Compras</Link>
          </li>
          <li>
            <Link to="/admin" onClick={() => setIsOpen(false)}>Admin IGA</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}