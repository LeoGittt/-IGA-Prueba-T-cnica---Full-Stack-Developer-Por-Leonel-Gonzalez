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
      </Router>
    </div>
  );
}

export default App;