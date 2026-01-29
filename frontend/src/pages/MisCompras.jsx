import React, { useState } from 'react';

export default function MisCompras() {
  const [email, setEmail] = useState('');
  const [misCursos, setMisCursos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const buscar = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (!email) return alert("Por favor, ingresá un email");
    
    setCargando(true);
    fetch(`http://localhost:3000/inscripciones?email=${email}`)
      .then(res => res.json())
      .then(data => {
        setMisCursos(data);
        if (data.length === 0) alert("No se encontraron registros.");
      })
      .catch(err => {
        console.error("Error en la búsqueda:", err);
        alert("Error al conectar con el servidor.");
      })
      .finally(() => setCargando(false));
  };

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#132442', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>Mis Cursos Comprados</h2>
      
      <form onSubmit={buscar} style={{ display: 'flex', gap: '10px', marginBottom: '30px', alignItems: 'center' }}>
        <input 
          type="email" 
          placeholder="Tu email (ej: leonel.gonzalez.dev@gmail.com)" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
          required 
        />
        <button 
          type="submit" 
          disabled={cargando}
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#e89353', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {cargando ? 'Buscando...' : 'Ver mis cursos'}
        </button>
      </form>
      
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {misCursos.map(insc => (
          <div key={insc.id} style={{ 
            display: 'flex', 
            backgroundColor: '#fff', 
            padding: '20px', 
            borderRadius: '12px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            alignItems: 'center',
            gap: '20px'
          }}>
            {insc.curso?.imagen && (
              <img src={insc.curso.imagen} alt={insc.curso.nombre} style={{ width: '100px', height: '100px', borderRadius: '8px', objectFit: 'cover' }} />
            )}
            <div>
              <h3 style={{ margin: '0 0 5px 0', color: '#132442', fontWeight: 'bold' }}>{insc.curso?.nombre || 'Nombre no disponible'}</h3>
              <p style={{ margin: 0, color: '#666' }}>Estado: <strong>Confirmado</strong></p>
              <small style={{ color: '#888' }}>ID Inscripción: #{insc.id}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}