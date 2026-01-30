import { useEffect, useState } from 'react';
import FormularioInscripcion from '../components/FormularioInscripcion';
import './Tienda.css';

export default function Tienda() {
  const [cursos, setCursos] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  
  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(valor);
  };

  useEffect(() => {
    fetch('http://localhost:3000/cursos')
      .then(res => res.json())
      .then(data => setCursos(data))
      .catch(err => console.error("Error cargando cursos:", err));
  }, []);

  return (
    <main className="grid-cursos">
      {cursos.map((curso) => (
        <article key={curso.id} className="curso-card">
          <div className="curso-image-container">
            <img
              src={curso.imagen}
              alt={curso.nombre}
              className="curso-image"
              referrerPolicy="no-referrer"
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          <div className="curso-content">
            <h2>{curso.nombre}</h2>
            <p>{curso.descripcion}</p>


            <div className="card-bottom">
              <span className="duracion">⏳ {curso.detalle}</span>
              <div className="precio-tag">
                {formatearPrecio(curso.precio)}
              </div>

              <button
                className="btn-inscribirme"
                onClick={() => setCursoSeleccionado(curso)}
              >
                Inscribirme
              </button>
            </div>
          </div>
        </article>
      ))}

      {cursoSeleccionado && (
        <FormularioInscripcion
          curso={cursoSeleccionado}
          onClose={() => setCursoSeleccionado(null)}
        />
      )}
    </main>
  );
}