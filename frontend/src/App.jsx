import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import AdminPanel from './pages/AdminPanel';
import MisCompras from './pages/MisCompras';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/mis-compras" element={<MisCompras />} />
          </Routes>
        </div>
        <Footer />

        
        <a
          href="https://api.whatsapp.com/send/?phone=12395080603&text=Hola%21+Me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Contactar por WhatsApp"
        >
          <span className="whatsapp-tooltip">¡Chateá con nosotros!</span>
          <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28">
            <path d="M16.004 0C7.177 0 0 7.177 0 16.004c0 2.823.737 5.584 2.137 8.012L0 32l8.188-2.148A15.94 15.94 0 0016.004 32C24.827 32 32 24.823 32 15.996 32 7.177 24.827 0 16.004 0zm0 29.332a13.29 13.29 0 01-6.77-1.856l-.485-.288-5.031 1.32 1.344-4.912-.316-.502a13.235 13.235 0 01-2.034-7.09C2.712 8.691 8.691 2.712 16.004 2.712c7.305 0 13.284 5.979 13.284 13.292 0 7.305-5.979 13.328-13.284 13.328zm7.29-9.946c-.4-.2-2.367-1.168-2.734-1.301-.367-.134-.634-.2-.9.2-.268.4-1.034 1.301-1.268 1.568-.234.268-.467.3-.867.1-.4-.2-1.689-.623-3.218-1.985-1.189-1.061-1.992-2.372-2.226-2.772-.234-.4-.025-.616.176-.816.18-.18.4-.467.6-.7.2-.234.267-.4.4-.668.134-.267.067-.5-.033-.7-.1-.2-.9-2.168-1.234-2.968-.325-.78-.655-.675-.9-.688-.233-.012-.5-.015-.767-.015s-.7.1-1.067.5c-.367.4-1.4 1.368-1.4 3.335 0 1.968 1.434 3.87 1.634 4.137.2.268 2.823 4.31 6.84 6.043.955.412 1.7.658 2.281.842.959.305 1.832.262 2.522.159.769-.115 2.367-.968 2.7-1.902.334-.934.334-1.735.234-1.902-.1-.168-.367-.268-.767-.468z" />
          </svg>
        </a>
      </Router>
    </div>
  );
}

export default App;