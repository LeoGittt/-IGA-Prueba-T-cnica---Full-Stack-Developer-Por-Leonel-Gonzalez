import { useState } from 'react';
import './FormularioInscripcion.css';

const FormularioInscripcion = ({ curso, onClose, onExito }) => {
  const [datos, setDatos] = useState({ nombreAlumno: '', email: '', celular: '' });
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (enviando) return;
    setEnviando(true);

    try {
      const response = await fetch('http://localhost:3000/inscripciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...datos, cursoId: curso.id }),
      });

      if (response.ok || response.status === 201) {
        alert('¡Inscripción enviada con éxito!');
        if (typeof onExito === 'function') onExito(); 
        onClose();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'No se pudo procesar la inscripción'}`);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert('Error de conexión con el servidor. Verificá que el backend esté corriendo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Inscripción: {curso.nombre}</h2>
        <p>Completá tus datos para que un asesor de IGA te contacte.</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" placeholder="Nombre Completo" required 
            value={datos.nombreAlumno}
            onChange={(e) => setDatos({...datos, nombreAlumno: e.target.value})} 
          />
          <input 
            type="email" placeholder="Correo Electrónico" required 
            value={datos.email}
            onChange={(e) => setDatos({...datos, email: e.target.value})} 
          />
          <input 
            type="tel" placeholder="Número de Celular" required 
            value={datos.celular}
            onChange={(e) => setDatos({...datos, celular: e.target.value})} 
          />
          <button type="submit" className="btn-inscribirse" disabled={enviando}>
            {enviando ? 'Enviando...' : 'Confirmar Inscripción'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioInscripcion;