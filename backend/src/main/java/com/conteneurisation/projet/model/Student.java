package com.conteneurisation.projet.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private int phoneNumber;
    private String gender;
    private LocalDate dateOfBirth;
    private LocalDate enrollmentDate;
    private String department;
    private String major;
    private float gpa;
    private int yearOfStudy;
    private String address;
    private String nationality;
    private String photoUrl;
    private String username;
    private String password;
}
