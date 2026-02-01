import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../config/api";
import "./MisCompras.css";

export default function MisCompras() {
  const [email, setEmail] = useState("");
  const [misCursos, setMisCursos] = useState(null);
  const [sugerencias, setSugerencias] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [cargandoSugerencias, setCargandoSugerencias] = useState(true);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarSugerencias = async () => {
      try {
        const data = await api.cursos.getAll();
       
        const randomSugerencias = data
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setSugerencias(randomSugerencias);
      } catch (err) {
        console.error("Error cargando sugerencias:", err);
      } finally {
        setCargandoSugerencias(false);
      }
    };

    cargarSugerencias();
  }, []);

  const buscar = async (e) => {
    e.preventDefault();
    if (!email) return;

    setCargando(true);
    setBusquedaRealizada(true);
    setError(null);

    try {
      const data = await api.inscripciones.getByEmail(email);
      setMisCursos(data);
    } catch (err) {
      console.error("Error en la búsqueda:", err);
      setError("Error al conectar con el servidor. Intentá de nuevo.");
    } finally {
      setCargando(false);
    }
  };

  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(valor);
  };

  return (
    <div className="mis-compras-container">
      <div className="header-section fade-in">
        <h2 className="header-title">Mis Cursos</h2>
        <p className="header-subtitle">
          Ingresá tu email para ver tus inscripciones confirmadas
        </p>
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
          {cargando ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {error && (
        <div className="error-message-box">
          <span>⚠️</span> {error}
        </div>
      )}

      {busquedaRealizada && !error && (
        <div className="results-area">
          {misCursos && misCursos.length > 0 ? (
            <div className="courses-grid">
              {misCursos.map((insc) => (
                <article key={insc.id} className="course-card-purchased">
                  <div className="card-image-wrapper">
                    {insc.curso?.imagen ? (
                      <img
                        src={insc.curso.imagen}
                        alt={insc.curso.nombre}
                        className="course-image"
                        loading="lazy"
                      />
                    ) : (
                      <div className="course-placeholder">SIN IMAGEN</div>
                    )}
                    <div className="status-badge">Confirmado</div>
                  </div>

                  <div className="card-content">
                    <h3>{insc.curso?.nombre || "Curso no disponible"}</h3>

                    <div className="card-meta">
                      <span>Inscripción</span>
                      <span className="inscription-id">
                        #{String(insc.id).padStart(4, "0")}
                      </span>
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

      {(!busquedaRealizada || (misCursos && misCursos.length === 0)) &&
        !cargandoSugerencias &&
        sugerencias.length > 0 && (
          <section className="suggestions-section fade-in">
            <div className="suggestions-header">
              <h3>¿Todavía no te inscribiste?</h3>
              <p>Explorá nuestros cursos más populares y empezá hoy mismo</p>
            </div>

            <div className="suggestions-grid">
              {sugerencias.map((curso) => (
                <article key={curso.id} className="suggestion-card">
                  <div className="suggestion-image-wrapper">
                    <img
                      src={curso.imagen}
                      alt={curso.nombre}
                      className="suggestion-image"
                    />
                    <span className="suggestion-category">
                      {curso.categoria || "Curso"}
                    </span>
                  </div>
                  <div className="suggestion-content">
                    <h4>{curso.nombre}</h4>
                    <div className="suggestion-footer">
                      <span className="suggestion-price">
                        {formatearPrecio(curso.precio)}
                      </span>
                      <button
                        className="btn-suggestion-enroll"
                        onClick={() => navigate(`/tienda?cursoId=${curso.id}`)}
                      >
                        Ver curso
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="suggestions-footer-link">
              <a href="/tienda" className="view-all-link">
                Ver toda la tienda →
              </a>
            </div>
          </section>
        )}
    </div>
  );
}
