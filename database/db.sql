-- creando la base de datos
CREATE DATABASE nodejsactividad;

-- usando la base de datos
USE nodejsactividad;

-- crear una tabla
CREATE TABLE juego (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    consola VARCHAR(100) NOT NULL,
    fecha DATE
);

-- mostrar las tablas
SHOW TABLES;

-- describir la tabla
DESCRIBE juego;