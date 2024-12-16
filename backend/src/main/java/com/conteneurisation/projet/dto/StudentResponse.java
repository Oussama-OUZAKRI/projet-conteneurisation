package com.conteneurisation.projet.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String gender;
    private LocalDate dateOfBirth;
    private LocalDate enrollmentDate;
    private String department;
    private String major;
    private BigDecimal gpa;
    private int yearOfStudy;
    private String address;
    private String nationality;
    private String photoUrl;
    private String username;
    private String password;
}
