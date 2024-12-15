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
            .firstName(studentRequest.getFirstName())
            .lastName(studentRequest.getLastName())
            .email(studentRequest.getEmail())
            .phoneNumber(studentRequest.getPhoneNumber())
            .gender(studentRequest.getGender())
            .dateOfBirth(studentRequest.getDateOfBirth())
            .department(studentRequest.getDepartment())
            .major(studentRequest.getMajor())
            .gpa(studentRequest.getGpa())
            .yearOfStudy(studentRequest.getYearOfStudy())
            .address(studentRequest.getAddress())
            .nationality(studentRequest.getNationality())
            .username(studentRequest.getUsername())
            .password(studentRequest.getPassword())
            .enrollmentDate(LocalDate.now())
            .build();

        studentRepository.save(createdStudent);
    }
}
