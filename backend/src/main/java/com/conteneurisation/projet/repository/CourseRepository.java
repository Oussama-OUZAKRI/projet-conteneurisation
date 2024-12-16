package com.conteneurisation.projet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.conteneurisation.projet.model.Course;

public interface CourseRepository extends JpaRepository<Course, String> {
    List<Course> findByStudentId(Long studentId);
} 
