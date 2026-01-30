import { useEffect, useState } from 'react';
import './AdminPanel.css';

export default function AdminPanel() {
  const [stats, setStats] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/cursos/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  const totalStudents = stats.reduce((acc, curr) => acc + (curr.inscripciones ? curr.inscripciones.length : 0), 0);
  const totalCourses = stats.length;
 
  const totalRevenue = totalStudents * 15000;

  const handleExport = () => {
    const headers = ['ID', 'Nombre del Curso', 'Inscritos', 'Ingresos Estimados'];
    const rows = stats.map((c, index) => [
      index + 1,
      c.nombre,
      c.inscripciones?.length || 0,
      `$${((c.inscripciones?.length || 0) * 15000).toLocaleString()}`
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'reporte_cursos_iga.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="admin-container fade-in">
      <header className="admin-header">
        <div>
          <h1>Panel de Control</h1>
          <p>Resumen general de rendimiento</p>
        </div>
        <div className="user-profile">
          <div className="avatar">A</div>
          <span>Administrador IGA</span>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon-box blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div className="stat-info">
            <h3>Estudiantes Totales</h3>
            <p className="stat-value">{totalStudents}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-box purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div className="stat-info">
            <h3>Cursos Activos</h3>
            <p className="stat-value">{totalCourses}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-box green">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div className="stat-info">
            <h3>Ingresos Estimados</h3>
            <p className="stat-value">${totalRevenue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="table-section">
        <div className="section-header">
          <h2>Rendimiento por Curso</h2>
          <button className="btn-export" onClick={handleExport}>Exportar Reporte</button>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre del Curso</th>
                <th>Progreso</th>
                <th>Inscritos</th>

                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((c, index) => (
                <tr key={c.id || index}>
                  <td>#{String(index + 1).padStart(3, '0')}</td>
                  <td>
                    <div className="course-name">{c.nombre}</div>
                  </td>
                  <td>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${Math.min((c.inscripciones?.length || 0) * 10, 100)}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="font-bold">{c.inscripciones?.length || 0}</td>

                  <td>
                    <button className="action-btn" onClick={() => handleViewDetails(c)}>Ver Detalles</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {
        selectedCourse && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>&times;</button>
              <h2>Detalles del Curso</h2>
              <div className="course-details">
                <h3>{selectedCourse.nombre}</h3>
                <p><strong>Total Inscritos:</strong> {selectedCourse.inscripciones?.length || 0}</p>
                <p><strong>Ingresos Generados:</strong> ${((selectedCourse.inscripciones?.length || 0) * 15000).toLocaleString()}</p>

                <div className="students-list">
                  <h4>Estudiantes Inscritos</h4>
                  <ul>
                    {selectedCourse.inscripciones && selectedCourse.inscripciones.length > 0 ? (
                      selectedCourse.inscripciones.map((student, idx) => (
                        <li key={idx}>
                          {typeof student === 'object' ? `${student.nombreAlumno || student.nombre || 'Cliente'} (${student.email})` : 'Estudiante registrado'}
                        </li>
                      ))
                    ) : (
                      <li className="no-students">No hay estudiantes inscritos aún.</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}