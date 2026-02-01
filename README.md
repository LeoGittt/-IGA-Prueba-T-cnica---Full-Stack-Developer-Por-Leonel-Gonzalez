### INSTALACIÓN Y ARRANQUE

1. Clonar el repositorio:
   git clone https://github.com/LeoGittt/-IGA-Prueba-T-cnica---Full-Stack-Developer-Por-Leonel-Gonzalez.git

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

### CREDENCIALES

En un entorno de producción, las credenciales se manejarían con variables de entorno (.env) y secrets management. Para esta demo, las credenciales están definidas directamente en el archivo docker-compose.yml. Esto facilita la evaluación inmediata sin necesidad de configurar archivos .env externos, aunque en producción se manejarían mediante secretos

### Idioma del Código

Para el desarrollo de esta prueba técnica, se ha utilizado una combinación de Inglés (para la lógica, nombres de variables y estructuras de datos estándar) y Español (para términos específicos del dominio del problema o comentarios).

Me adapto fácilmente a las convenciones de nomenclatura que prefiera el equipo (Full English o Español/Inglés). En este caso, prioricé la claridad de los conceptos solicitados en la consigna.

### Interfaz y Estilos

Aunque el foco principal era la funcionalidad técnica, decidí aplicar un diseño cuidado y responsivo para mejorar la experiencia de usuario.

Estética: Se aplicó un estilo moderno y profesional acorde a la temática del proyecto.
Responsividad: La interfaz es adaptable a diferentes tamaños de pantalla (Mobile First).
Feedback: Se añadieron estados visuales (hovers, loaders, transiciones) para que la interacción sea más intuitiva.

### Áreas de Mejora y Escalabilidad

Debido a los tiempos de entrega de la prueba técnica, existen ciertos aspectos que se podrían optimizar en una fase posterior:

Modularización de Estilos: Se priorizó el desarrollode la UI, por lo que algunos archivos CSS/Componentes resultaron extensos. Una mejora inmediata sería la extracción de constantes, mixins o la creación de átomos de diseño más granulares.
Refactorización de Lógica:Algunos componentes concentran lógica que podría derivarse a Hooks personalizados para mejorar la legibilidad y el testeo.

### Notas Adicionales

### Gestión de tiempos y mejora continua

Al no tener una fecha de entrega estrictamente definida al inicio, decidí adoptar un enfoque de mejora continua. Una vez cumplidos los requisitos base de la prueba, opté por seguir iterando en el proyecto (refactorización de código, optimización de la UI y ajustes de Docker) hasta recibir una respuesta o confirmación de cierre por parte del equipo técnico.

Esto me permitió no solo asegurar la estabilidad de la entrega, sino también pulir detalles de UX/UI que considero fundamentales.

---

Desarrollado por Leonel Gonzalez
