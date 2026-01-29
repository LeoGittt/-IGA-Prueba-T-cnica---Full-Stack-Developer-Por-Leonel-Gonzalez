import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img 
            src="https://iga-la.com/arg/wp-content/uploads/sites/2/2025/08/gifweb-ezgif.com-optimize.gif" 
            alt="IGA Logo" 
            className="navbar-logo"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/tienda">Tienda</Link>
        </li>
        <li>
          <Link to="/mis-compras">Mis Compras</Link>
        </li>
        <li>
          <Link to="/admin">Admin IGA</Link>
        </li>
      </ul>
    </nav>
  );
}