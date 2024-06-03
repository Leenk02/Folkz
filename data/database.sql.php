<?php
-- SQL script til at oprette database
CREATE DATABASE folketidende;

USE folketidende;

CREATE TABLE users (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP
);

