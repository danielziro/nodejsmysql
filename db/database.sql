create database IF NOT EXISTS userdb;

USE userdb;

CREATE TABLE user (
    id int(11) NOT NULL AUTO_INCREMENT ,
    document() NOT NULL, 
    fullName varchar(45) DEFAULT NULL,
    edad int(5) DEFAULT NULL,
    userName varchar(45) DEFAULT NULL,
    password varchar(45) DEFAULT NULL,
    primary key(id,document,userName)   
);

DESCRIBE user; 

INSERT INTO user (document, fullName, edad, userName,password)
VALUES 
(123456789, 'John Doe', 30, 'john.doe','john32'),
(987654321, 'Jane Smith', 28, 'jane.smith','jane22'),
(456123789, 'Mike Johnson', 35, 'mike.johnson','mike12'),
(852631974, 'Sara Connor', 25, 'sara.connor','connor56'),
(999111222, 'Tom Williams', 22, 'tom.williams','williams405');


