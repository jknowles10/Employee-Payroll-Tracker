-- Write code here or enter directly in PostgreSQL shell --
-- delete sample_db

DROP DATABASE IF EXISTS sample_db;
--create books_db
CREATE DATABASE books_db; 

-- list all databases 
\l 

-- set current db to books_db
\c books_db;