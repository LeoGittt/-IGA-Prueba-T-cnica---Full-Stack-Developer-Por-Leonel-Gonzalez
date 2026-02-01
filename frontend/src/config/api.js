// Configuración centralizada de la API
export const API_URL = 'http://localhost:3000';

export const api = {
  cursos: {
    getAll: async () => {
      const response = await fetch(`${API_URL}/cursos`);
      if (!response.ok) throw new Error('Error al cargar cursos');
      return response.json();
    },
    getStats: async () => {
      const response = await fetch(`${API_URL}/cursos/admin/stats`);
      if (!response.ok) throw new Error('Error al cargar estadísticas');
      return response.json();
    },
  },
  inscripciones: {
    create: async (data) => {
      const response = await fetch(`${API_URL}/inscripciones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response;
    },
    getByEmail: async (email) => {
      const response = await fetch(`${API_URL}/inscripciones?email=${encodeURIComponent(email)}`);
      if (!response.ok) throw new Error('Error al buscar inscripciones');
      return response.json();
    },
  },
};
