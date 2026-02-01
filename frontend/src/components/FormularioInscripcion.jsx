import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../config/api";
import "./FormularioInscripcion.css";

const FormularioInscripcion = ({ curso, onClose, onExito }) => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    nombreAlumno: "",
    email: "",
    celular: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);
  const [errores, setErrores] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (enviando) return;
    setEnviando(true);
    setErrores([]);

    try {
      const response = await api.inscripciones.create({
        ...datos,
        cursoId: curso.id,
      });

      if (response.ok || response.status === 201) {
        setMostrarExito(true);
        if (typeof onExito === "function") onExito();
      } else {
        const errorData = await response.json();
        if (errorData.message && Array.isArray(errorData.message)) {
          setErrores(errorData.message);
        } else {
          setErrores([
            errorData.message || "No se pudo procesar la inscripción",
          ]);
        }
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setErrores(["Error de conexión con el servidor."]);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <button className="close-btn" onClick={onClose} aria-label="Cerrar">
          &times;
        </button>

        {mostrarExito ? (
          <div className="success-content">
            <span className="success-icon">🎉</span>
            <h2>¡Inscripción Exitosa!</h2>
            <p>
              Tu solicitud para <strong>{curso.nombre}</strong> ha sido enviada
              correctamente.
            </p>

            <div className="info-box">
              <p>
                Podés ver el estado de tu inscripción en la sección{" "}
                <strong>Mis Inscripciones</strong>.
              </p>
            </div>

            <div className="success-actions">
              <button
                className="btn-primary"
                onClick={() => {
                  onClose();
                  navigate("/mis-compras");
                }}
              >
                Ver Estado de Inscripción
              </button>
              <button className="btn-secondary" onClick={onClose}>
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2>Inscribirme</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Estás a un paso de comenzar <strong>{curso.nombre}</strong>.
              Completá tus datos:
            </p>

            {errores.length > 0 && (
              <div className="error-list">
                {errores.map((err, idx) => (
                  <div key={idx} className="error-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    {err}
                  </div>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-input-group">
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  required
                  minLength={2}
                  value={datos.nombreAlumno}
                  onChange={(e) =>
                    setDatos({ ...datos, nombreAlumno: e.target.value })
                  }
                />
              </div>
              <div className="form-input-group">
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  required
                  value={datos.email}
                  onChange={(e) =>
                    setDatos({ ...datos, email: e.target.value })
                  }
                />
              </div>
              <div className="form-input-group">
                <input
                  type="tel"
                  placeholder="Número de Celular"
                  required
                  minLength={8}
                  value={datos.celular}
                  onChange={(e) =>
                    setDatos({ ...datos, celular: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn-submit" disabled={enviando}>
                {enviando ? "Enviando solicitud..." : "Confirmar Inscripción"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FormularioInscripcion;
