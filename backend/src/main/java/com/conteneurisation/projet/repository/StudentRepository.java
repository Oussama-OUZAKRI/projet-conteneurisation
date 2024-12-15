package com.conteneurisation.projet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.conteneurisation.projet.model.Student;


public interface StudentRepository extends JpaRepository<Student, Long> {
}
