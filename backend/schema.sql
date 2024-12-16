CREATE TABLE UserInfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    roles VARCHAR(255)
);

CREATE TABLE Student (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    phoneNumber VARCHAR(255),
    gender VARCHAR(50),
    dateOfBirth DATE,
    enrollmentDate DATE,
    department VARCHAR(255),
    major VARCHAR(255),
    gpa DECIMAL(3, 2),
    yearOfStudy INT,
    address TEXT,
    nationality VARCHAR(255),
    photoUrl VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE Course (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    grade DECIMAL(3, 2),
    instructor VARCHAR(255),
    student_id BIGINT,
    FOREIGN KEY (student_id) REFERENCES Student(id)
);
