package com.conteneurisation.projet.service;

import java.time.LocalDate;
import java.util.List;

import javax.management.relation.RelationNotFoundException;

import org.springframework.stereotype.Service;

import com.conteneurisation.projet.dto.StudentRequest;
import com.conteneurisation.projet.dto.StudentResponse;
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

    public StudentResponse getStudentById(Long id) throws Exception {
        Student student = studentRepository.findById(id)
            .orElseThrow(() -> new RelationNotFoundException("Student with ID " + id + " not found."));

        return StudentResponse.builder()
            .id(student.getId())
            .firstName(student.getFirstName())
            .lastName(student.getLastName())
            .email(student.getEmail())
            .phoneNumber(student.getPhoneNumber())
            .gender(student.getGender())
            .dateOfBirth(student.getDateOfBirth())
            .enrollmentDate(student.getEnrollmentDate())
            .department(student.getDepartment())
            .major(student.getMajor())
            .gpa(student.getGpa())
            .yearOfStudy(student.getYearOfStudy())
            .address(student.getAddress())
            .nationality(student.getNationality())
            .photoUrl(student.getPhotoUrl())
            .username(student.getUsername())
            .password(student.getPassword())
            .build();
    } 
}
