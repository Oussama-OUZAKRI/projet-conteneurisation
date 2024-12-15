package com.conteneurisation.projet.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.conteneurisation.projet.dto.StudentRequest;
import com.conteneurisation.projet.model.Student;
import com.conteneurisation.projet.repository.StudentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;
    
    public List<Student> getAllStudents() {
        List<Student> studentsList = studentRepository.findAll();
        return studentsList;
    }

    public void createStudent(StudentRequest studentRequest) {
        Student createdStudent = Student.builder()
            .firstName(studentRequest.getName())
            .enrollmentDate(LocalDate.now())
            .build();

            studentRepository.save(createdStudent);
    }
}
