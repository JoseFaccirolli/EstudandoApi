create database exampleDatabase;

use exampleDatabase;

create table user (
    user_cpf char(11) primary key,
    user_email varchar(150) unique not null,
    user_password varchar(255) not null,
    user_name varchar(150) not null
);