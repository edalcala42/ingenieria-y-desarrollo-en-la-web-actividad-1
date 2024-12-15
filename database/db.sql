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

-- crear una segunda tabla
CREATE TABLE personaje (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    juegoId INT(6) UNSIGNED,
    FOREIGN KEY (juegoId) REFERENCES juego(id)
);

-- mostrar las tablas
SHOW TABLES;

-- describir la tabla
DESCRIBE juego;