package com.conteneurisation.projet.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentRequest {
    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @NotBlank(message = "Email cannot be empty")
    private String email;

    @NotNull(message = "Phone number cannot be null")
    @Positive(message = "Phone number must be positive")
    private int phoneNumber;

    @NotBlank(message = "Gender cannot be empty")
    private String gender;

    @NotNull(message = "Date of birth cannot be empty")
    private LocalDate dateOfBirth;

    @NotBlank(message = "Department cannot be empty")
    private String department;

    @NotBlank(message = "Major cannot be empty")
    private String major;

    @NotNull(message = "Le GPA ne peut pas être nul")
    private float gpa;

    @Positive(message = "Year of study must be a positive number")
    private int yearOfStudy;

    @NotBlank(message = "Adress cannot be empty")
    private String address;

    @NotBlank(message = "Nationality cannot be empty")
    private String nationality;

    private String photoUrl;

    @NotBlank(message = "Username cannot be empty")
    private String username;

    @NotBlank(message = "Password cannot be empty")
    private String password;
}
