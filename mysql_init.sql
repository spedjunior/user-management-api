CREATE TABLE users (
    id VARCHAR(100),
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    PRIMARY KEY (id, email)
);