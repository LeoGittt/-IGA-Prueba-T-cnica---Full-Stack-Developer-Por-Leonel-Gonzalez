
### INSTALACIÓN Y ARRANQUE
1. Clonar el repositorio:
git clone <url-del-repositorio>

2. Entrar a la carpeta:
cd iga-test

3. Levantar con Docker:
docker-compose up --build -d

---

### ACCESOS DEL SISTEMA
- Frontend: http://localhost:5173
- API Backend: http://localhost:3000
- MySQL: Puerto local 3307

---

### TECNOLOGÍAS UTILIZADAS
- Frontend: React.js
- Backend: NestJS (Node.js)
- Base de Datos: MySQL 8.0
- Infraestructura: Docker

---

### FUNCIONALIDADES PRINCIPALES
- Catálogo de cursos con descripción e imágenes.
- Formulario de inscripción (nombre, email y celular).
- Panel de administración para ver inscriptos y gestionar cursos.

---

### NOTAS DE LA BASE DE DATOS
La base "iga_db" se configura automáticamente con el script "./init-db/setup.sql" en UTF-8 (utf8mb4).

En caso de errores con caracteres especiales o tildes, resetear volúmenes:
1. docker-compose down -v
2. docker-compose up --build

---
Desarrollado por Leonel Gonzalez