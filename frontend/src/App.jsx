import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import AdminPanel from "./pages/AdminPanel";
import MisCompras from "./pages/MisCompras";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/mis-compras" element={<MisCompras />} />
          </Routes>
        </main>

        <Footer />

      
        <a
          href="https://api.whatsapp.com/send/?phone=12395080603&text=Hola%21+Me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Contactar por WhatsApp"
        >
          <span className="whatsapp-tooltip">¡Chateá con nosotros!</span>

          <svg viewBox="0 0 32 32" fill="currentColor">
            <path d="M16.004 0C7.177 0 0 7.177 0 16.004c0 2.823.737 5.584 2.137 8.012L0 32l8.188-2.148A15.94 15.94 0 0016.004 32C24.827 32 32 24.823 32 15.996 32 7.177 24.827 0 16.004 0zm0 29.332a13.29 13.29 0 01-6.77-1.856l-.485-.288-5.031 1.32 1.344-4.912-.316-.502a13.235 13.235 0 01-2.034-7.09C2.712 8.691 8.691 2.712 16.004 2.712c7.305 0 13.284 5.979 13.284 13.292 0 7.305-5.979 13.328-13.284 13.328z" />
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;
