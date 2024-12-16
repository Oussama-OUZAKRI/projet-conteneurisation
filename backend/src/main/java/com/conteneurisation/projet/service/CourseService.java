package com.conteneurisation.projet.service;

import java.util.List;

import javax.management.relation.RelationNotFoundException;

import org.springframework.stereotype.Service;

import com.conteneurisation.projet.dto.CourseDto;
import com.conteneurisation.projet.model.Course;
import com.conteneurisation.projet.model.Student;
import com.conteneurisation.projet.repository.CourseRepository;
import com.conteneurisation.projet.repository.StudentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final StudentRepository studentRepository;

    public List<CourseDto> getCourses(Long studentId) {
        List<Course> courses = courseRepository.findByStudentId(studentId);

        return courses.stream()
            .map(course -> CourseDto.builder()
                .name(course.getName())
                .grade(course.getGrade())
                .instructor(course.getInstructor())
                .build())
            .toList();
    }

    public void createCourse(CourseDto courseRequest, Long id) throws Exception {
        Student student = studentRepository.findById(id)
            .orElseThrow(() -> new RelationNotFoundException("Student with ID " + id + " not found."));
        
        Course createdCourse = Course.builder()
            .name(courseRequest.getName())
            .grade(courseRequest.getGrade())
            .instructor(courseRequest.getInstructor())
            .student(student)
            .build();
        
        courseRepository.save(createdCourse);
    }
}
