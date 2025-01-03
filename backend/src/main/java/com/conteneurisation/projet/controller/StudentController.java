package com.conteneurisation.projet.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.conteneurisation.projet.dto.CourseDto;
import com.conteneurisation.projet.dto.StudentRequest;
import com.conteneurisation.projet.dto.StudentResponse;
import com.conteneurisation.projet.model.Student;
import com.conteneurisation.projet.service.CourseService;
import com.conteneurisation.projet.service.StudentService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/students")
public class StudentController {
    private final StudentService studentService;
    private final CourseService courseService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public StudentResponse getStudentById(@PathVariable("id") Long id) throws Exception {
        return studentService.getStudentById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createStudent(@Valid @RequestBody StudentRequest studentRequest) {
        studentService.createStudent(studentRequest);
    }

    @GetMapping("/{id}/courses")
    @ResponseStatus(HttpStatus.OK)
    public List<CourseDto> getCourses(@PathVariable("id") Long id) {
        return courseService.getCourses(id);
    }

    @PostMapping("/{id}/courses")
    @ResponseStatus(HttpStatus.CREATED)
    public void createCourse(@Valid @RequestBody CourseDto courseRequest, @PathVariable("id") Long id) throws Exception {
        courseService.createCourse(courseRequest, id);
    }
}
