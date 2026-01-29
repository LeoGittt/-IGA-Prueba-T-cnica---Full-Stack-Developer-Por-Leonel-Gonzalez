SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;
SET character_set_connection = utf8mb4;
SET character_set_client = utf8mb4;
SET character_set_results = utf8mb4;

ALTER DATABASE iga_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE iga_db;

CREATE TABLE IF NOT EXISTS cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    descripcion TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    detalle VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    precio DECIMAL(10,2) DEFAULT 0.00,
    imagen VARCHAR(500)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS inscripciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombreAlumno VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    email VARCHAR(255) NOT NULL,
    celular VARCHAR(255) NOT NULL,
    fechaInscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cursoId INT,
    CONSTRAINT FK_Curso_Inscripcion FOREIGN KEY (cursoId) 
    REFERENCES cursos(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE inscripciones;
TRUNCATE TABLE cursos;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO cursos (nombre, descripcion, detalle, precio, imagen) VALUES 
('Alta Cocina', 'Formación integral en técnicas culinarias de vanguardia.', '2 Años - Intensivo: 15 Meses', 45000.00, 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'),
('Pastelería', 'Domina el arte de la pastelería y panadería profesional.', '2 Años', 38000.00, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'),
('Barista', 'Especialista en café de especialidad y arte latte.', '4 Meses', 25000.00, 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'),
('Cocina Saludable', 'Platos nutritivos y técnicas de cocina funcional.', '3 Meses', 22000.00, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'),
('Cocina Sin TACC', 'Preparaciones 100% libres de gluten y contaminación.', '1 Mes', 18000.00, 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80'),
('Cocina Vegana', 'Gastronomía basada en plantas y nuevas proteínas.', '4 Meses', 24000.00, 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80'),
('Sommelier', 'Análisis sensorial, cata y gestión profesional de cavas.', '8 Meses', 32000.00, 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'),
('Bartender', 'Mixología clásica y moderna para barras profesionales.', '3 Meses y 1/2', 20000.00, 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'),
('Chocolatería', 'Técnicas de templado, bombones y diseño artístico.', '4 y 1/2 Meses', 28000.00, 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80'),
('Decoración', 'Diseño decorativo y modelado artístico de tortas.', '4 Meses', 21000.00, 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80'),
('Sushi & Japonesa', 'Técnicas milenarias de corte, arroz y cultura nipona.', '3 Meses', 27000.00, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'),
('Chef Express', 'Curso intensivo con las bases esenciales de la cocina.', '4 y 1/2 Meses', 23000.00, 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80');