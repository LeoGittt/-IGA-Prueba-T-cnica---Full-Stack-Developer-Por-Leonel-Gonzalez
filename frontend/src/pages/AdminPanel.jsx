import { useEffect, useState } from 'react';
import './AdminPanel.css';

export default function AdminPanel() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cursos/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div className="p-8">
      <h2>Panel de Administración IGA</h2>
      <table>
        <thead>
          <tr>
            <th>Curso</th>
            <th>Ventas</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(c => (
            <tr key={c.id}>
              <td>{c.nombre}</td>
              <td>{c.inscripciones.length} inscritos</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}