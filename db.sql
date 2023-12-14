CREATE DATABASE projet_module_react;

USE projet_module_react;

CREATE TABLE users(
    email VARCHAR(50) PRIMARY KEY,
    pseudo VARCHAR(50),
    mdp CHAR(64)
);

INSERT INTO users VALUES("admin@admin.com", "Administrateur", "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918");