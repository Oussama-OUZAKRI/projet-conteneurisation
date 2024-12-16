-- Insertion des étudiants
INSERT INTO student (first_name, last_name, email, phone_number, gender, date_of_birth, enrollment_date, department, major, gpa, year_of_study, address, nationality, photo_url, username, password)
VALUES
('John', 'Doe', 'john.doe@email.com', '123-456-7890', 'Male', '2000-01-01', '2022-09-01', 'Engineering', 'Software Engineering', 3.5, 1, '123 Main St', 'American', 'https://example.com/photo.jpg', 'john_doe', 'password123'),
('Jane', 'Smith', 'jane.smith@email.com', '123-456-7891', 'Female', '1999-05-10', '2021-09-01', 'Engineering', 'Computer Science', 3.8, 2, '456 Oak St', 'American', 'https://example.com/photo2.jpg', 'jane_smith', 'password123'),
('Alice', 'Johnson', 'alice.johnson@email.com', '123-456-7892', 'Female', '1998-07-15', '2020-09-01', 'Engineering', 'Electrical Engineering', 3.2, 3, '789 Pine St', 'American', 'https://example.com/photo3.jpg', 'alice_johnson', 'password123'),
('Bob', 'Brown', 'bob.brown@email.com', '123-456-7893', 'Male', '1997-12-20', '2019-09-01', 'Engineering', 'Mechanical Engineering', 2.9, 4, '101 Maple St', 'American', 'https://example.com/photo4.jpg', 'bob_brown', 'password123'),
('Charlie', 'Davis', 'charlie.davis@email.com', '123-456-7894', 'Male', '1996-03-30', '2018-09-01', 'Engineering', 'Civil Engineering', 3.6, 5, '202 Birch St', 'American', 'https://example.com/photo5.jpg', 'charlie_davis', 'password123'),
('David', 'Martinez', 'david.martinez@email.com', '123-456-7895', 'Male', '1995-11-10', '2017-09-01', 'Engineering', 'Chemical Engineering', 3.0, 6, '303 Cedar St', 'American', 'https://example.com/photo6.jpg', 'david_martinez', 'password123'),
('Eva', 'Garcia', 'eva.garcia@email.com', '123-456-7896', 'Female', '1994-04-20', '2016-09-01', 'Engineering', 'Industrial Engineering', 3.9, 7, '404 Elm St', 'American', 'https://example.com/photo7.jpg', 'eva_garcia', 'password123'),
('Frank', 'Wilson', 'frank.wilson@email.com', '123-456-7897', 'Male', '1993-09-25', '2015-09-01', 'Engineering', 'Aerospace Engineering', 2.7, 8, '505 Willow St', 'American', 'https://example.com/photo8.jpg', 'frank_wilson', 'password123'),
('Grace', 'Lopez', 'grace.lopez@email.com', '123-456-7898', 'Female', '1992-06-05', '2014-09-01', 'Engineering', 'Biotechnology', 3.4, 9, '606 Redwood St', 'American', 'https://example.com/photo9.jpg', 'grace_lopez', 'password123'),
('Hank', 'Martinez', 'hank.martinez@email.com', '123-456-7899', 'Male', '1991-02-17', '2013-09-01', 'Engineering', 'Environmental Engineering', 3.3, 10, '707 Pine St', 'American', 'https://example.com/photo10.jpg', 'hank_martinez', 'password123');

-- Insertion des cours pour chaque étudiant
INSERT INTO course (name, grade, instructor, student_id)
VALUES
('Math 101', 12.5, 'Prof. Smith', 11),
('Computer Science 101', 14.0, 'Prof. Johnson', 11),
('Physics 101', 10.0, 'Prof. Lee', 11),
('Engineering 101', 11.5, 'Prof. White', 11),
('Chemistry 101', 13.5, 'Prof. Black', 11),

('Math 101', 15.0, 'Prof. Smith', 2),
('Computer Science 101', 16.0, 'Prof. Johnson', 2),
('Physics 101', 12.0, 'Prof. Lee', 2),
('Engineering 101', 13.0, 'Prof. White', 2),
('Chemistry 101', 14.0, 'Prof. Black', 2),

('Math 101', 11.0, 'Prof. Smith', 3),
('Computer Science 101', 9.0, 'Prof. Johnson', 3),
('Physics 101', 8.5, 'Prof. Lee', 3),
('Engineering 101', 10.0, 'Prof. White', 3),
('Chemistry 101', 7.5, 'Prof. Black', 3),

('Math 101', 13.0, 'Prof. Smith', 4),
('Computer Science 101', 11.5, 'Prof. Johnson', 4),
('Physics 101', 10.5, 'Prof. Lee', 4),
('Engineering 101', 12.0, 'Prof. White', 4),
('Chemistry 101', 9.5, 'Prof. Black', 4),

('Math 101', 16.0, 'Prof. Smith', 5),
('Computer Science 101', 17.0, 'Prof. Johnson', 5),
('Physics 101', 14.0, 'Prof. Lee', 5),
('Engineering 101', 15.0, 'Prof. White', 5),
('Chemistry 101', 16.5, 'Prof. Black', 5),

('Math 101', 14.5, 'Prof. Smith', 6),
('Computer Science 101', 13.5, 'Prof. Johnson', 6),
('Physics 101', 12.5, 'Prof. Lee', 6),
('Engineering 101', 15.0, 'Prof. White', 6),
('Chemistry 101', 13.0, 'Prof. Black', 6),

('Math 101', 13.0, 'Prof. Smith', 7),
('Computer Science 101', 14.0, 'Prof. Johnson', 7),
('Physics 101', 13.5, 'Prof. Lee', 7),
('Engineering 101', 16.0, 'Prof. White', 7),
('Chemistry 101', 14.5, 'Prof. Black', 7),

('Math 101', 12.0, 'Prof. Smith', 8),
('Computer Science 101', 13.0, 'Prof. Johnson', 8),
('Physics 101', 12.0, 'Prof. Lee', 8),
('Engineering 101', 13.5, 'Prof. White', 8),
('Chemistry 101', 12.5, 'Prof. Black', 8),

('Math 101', 14.0, 'Prof. Smith', 9),
('Computer Science 101', 15.0, 'Prof. Johnson', 9),
('Physics 101', 16.0, 'Prof. Lee', 9),
('Engineering 101', 14.5, 'Prof. White', 9),
('Chemistry 101', 15.0, 'Prof. Black', 9),

('Math 101', 11.0, 'Prof. Smith', 10),
('Computer Science 101', 10.5, 'Prof. Johnson', 10),
('Physics 101', 12.0, 'Prof. Lee', 10),
('Engineering 101', 13.0, 'Prof. White', 10),
('Chemistry 101', 11.5, 'Prof. Black', 10);
