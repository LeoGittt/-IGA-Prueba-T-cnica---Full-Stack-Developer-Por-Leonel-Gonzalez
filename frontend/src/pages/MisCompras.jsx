import React, { useState } from 'react';
import './MisCompras.css';

export default function MisCompras() {
  const [email, setEmail] = useState('');
  const [misCursos, setMisCursos] = useState(null); 
  const [cargando, setCargando] = useState(false);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  const buscar = (e) => {
    e.preventDefault();
    if (!email) return alert("Por favor, ingresá un email");

    setCargando(true);
    setBusquedaRealizada(true);
    fetch(`http://localhost:3000/inscripciones?email=${email}`)
      .then(res => res.json())
      .then(data => {
        setMisCursos(data);
      })
      .catch(err => {
        console.error("Error en la búsqueda:", err);
        alert("Error al conectar con el servidor.");
      })
      .finally(() => setCargando(false));
  };

  return (
    <div className="mis-compras-container">
      <div className="header-section fade-in">
        <h2 className="header-title">Mis Cursos</h2>
        <p className="header-subtitle">Ingresá tu email para ver tus inscripciones confirmadas</p>
      </div>

      <form onSubmit={buscar} className="search-form fade-in">
        <input
          type="email"
          className="search-input"
          placeholder="Ej: tu.nombre@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="search-btn" disabled={cargando}>
          {cargando ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {busquedaRealizada && (
        <div className="results-area">
          {misCursos && misCursos.length > 0 ? (
            <div className="courses-grid">
              {misCursos.map(insc => (
                <article key={insc.id} className="course-card-purchased">
                  <div className="card-image-wrapper">
                    {insc.curso?.imagen ? (
                      <img src={insc.curso.imagen} alt={insc.curso.nombre} className="course-image" />
                    ) : (
                      <div className="course-placeholder">SIN IMAGEN</div>
                    )}
                    <div className="status-badge">Confirmado</div>
                  </div>

                  <div className="card-content">
                    <h3>{insc.curso?.nombre || 'Curso no disponible'}</h3>

                    <div className="card-meta">
                      <span>Inscripción</span>
                      <span className="inscription-id">#{String(insc.id).padStart(4, '0')}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-icon">📂</span>
              <p>No encontramos inscripciones con ese email.</p>
              <small>Verificá que esté escrito correctamente.</small>
            </div>
          )}
        </div>
      )}
    </div>
  );
}