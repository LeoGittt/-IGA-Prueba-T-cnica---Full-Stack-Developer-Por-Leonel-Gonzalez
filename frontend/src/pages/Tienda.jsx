import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Search, Filter, SlidersHorizontal, X } from "lucide-react";
import { api } from "../config/api";
import FormularioInscripcion from "../components/FormularioInscripcion";
import "./Tienda.css";

export default function Tienda() {
  const [cursos, setCursos] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [highlightId, setHighlightId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [orden, setOrden] = useState("defecto");
  const [mostrarFiltrosMovil, setMostrarFiltrosMovil] = useState(false);

  const categorias = useMemo(() => {
    const cats = cursos
      .map((c) => c.categoria)
      .filter((cat) => cat && cat !== "General");
    return [...new Set(cats)];
  }, [cursos]);

  const cursosFiltrados = useMemo(() => {
    return cursos
      .filter((curso) => {
        const matchesSearch =
          curso.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          curso.descripcion.toLowerCase().includes(busqueda.toLowerCase());

        const matchesCategory =
          !categoriaSeleccionada || curso.categoria === categoriaSeleccionada;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (orden === "precio-asc") return a.precio - b.precio;
        if (orden === "precio-desc") return b.precio - a.precio;
        if (orden === "nombre-asc") return a.nombre.localeCompare(b.nombre);
        return 0;
      });
  }, [cursos, busqueda, categoriaSeleccionada, orden]);

  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(valor);
  };

  const location = useLocation();

  useEffect(() => {
    const cargarCursos = async () => {
      try {
        setLoading(true);
        const data = await api.cursos.getAll();
        setCursos(data);
        setError(null);

        const params = new URLSearchParams(location.search);
        const cursoId = params.get("cursoId");
        if (cursoId) {
          setHighlightId(cursoId);
          setTimeout(() => {
            const element = document.getElementById(`curso-${cursoId}`);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 500);
        }
      } catch (err) {
        console.error("Error cargando cursos:", err);
        setError(
          "No se pudieron cargar los cursos. Verificá que el servidor esté corriendo.",
        );
      } finally {
        setLoading(false);
      }
    };

    cargarCursos();
  }, [location.search]);

  if (loading) {
    return (
      <main className="loading-container">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="skeleton-card" />
        ))}
      </main>
    );
  }

  if (error) {
    return (
      <main className="error-container">
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <h2>Error al cargar cursos</h2>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-retry"
          >
            Reintentar
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="tienda-container">
      <section className="filters-container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Buscar cursos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
        </div>

        <button
          className="btn-toggle-filters"
          onClick={() => setMostrarFiltrosMovil(!mostrarFiltrosMovil)}
        >
          <SlidersHorizontal size={20} />
          Filtros
        </button>

        <div className={`filters-actions ${mostrarFiltrosMovil ? "open" : ""}`}>
          <div className="categories-list">
            {categorias.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${
                  categoriaSeleccionada === cat ? "active" : ""
                }`}
                onClick={() =>
                  setCategoriaSeleccionada((prev) =>
                    prev === cat ? null : cat,
                  )
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="filters-right">
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              className="sort-select"
            >
              <option value="defecto">Filtros</option>
              <option value="precio-asc">Menor Precio</option>
              <option value="precio-desc">Mayor Precio</option>
              <option value="nombre-asc">Nombre A-Z</option>
            </select>

            {(busqueda || categoriaSeleccionada || orden !== "defecto") && (
              <button
                className="btn-clear-filters"
                onClick={() => {
                  setBusqueda("");
                  setCategoriaSeleccionada(null);
                  setOrden("defecto");
                  setMostrarFiltrosMovil(false);
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {cursosFiltrados.length === 0 ? (
        <div className="no-results">
          <div className="no-results-content">
            <Search size={48} className="no-results-icon" />
            <h3>No encontramos cursos</h3>
            <p>
              Intenta ajustar tu búsqueda o los filtros para encontrar lo que
              buscas.
            </p>
            <button
              className="btn-retry"
              onClick={() => {
                setBusqueda("");
                setCategoriaSeleccionada(null);
                setOrden("defecto");
              }}
            >
              Limpiar filtros
            </button>
          </div>
        </div>
      ) : (
        <main className="grid-cursos">
          {cursosFiltrados.map((curso) => (
            <article
              key={curso.id}
              id={`curso-${curso.id}`}
              className={`curso-card ${
                String(curso.id) === highlightId ? "highlight-card" : ""
              }`}
            >
              <div className="curso-image-container">
                <span className="curso-badge">
                  {curso.categoria || "Curso"}
                </span>
                <img
                  src={curso.imagen}
                  alt={curso.nombre}
                  className="curso-image"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="curso-content">
                <h2>{curso.nombre}</h2>
                <p>{curso.descripcion}</p>

                <div className="card-bottom">
                  <div className="card-info-row">
                    <span className="duracion">⏳ {curso.detalle}</span>
                    <div className="precio-tag">
                      {formatearPrecio(curso.precio)}
                    </div>
                  </div>

                  <button
                    className="btn-inscribirme"
                    onClick={() => setCursoSeleccionado(curso)}
                  >
                    <span>Inscribirme Ahora</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </main>
      )}

      {cursoSeleccionado && (
        <FormularioInscripcion
          curso={cursoSeleccionado}
          onClose={() => setCursoSeleccionado(null)}
        />
      )}
    </div>
  );
}
