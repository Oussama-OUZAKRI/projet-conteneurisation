import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import isTokenExpired from '../utils/isTokenExpired';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        dateOfBirth: "",
        department: "",
        major: "",
        gpa: "",
        yearOfStudy: "",
        address: "",
        nationality: "",
        username: "",
        password: "",
    });

    const [responseStatus, setResponseStatus] = useState({
        status: null,
        response: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const token = localStorage.getItem('jwtToken'); 
        if (!token || isTokenExpired(token)) {
            localStorage.removeItem('jwt');
            navigate('/login'); 
        }
        axios.post(`http://backend.local/api/v1/students`, formData,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                setResponseStatus({
                    status: true,
                    response: "Student added successfully!",
                });
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    gender: "",
                    dateOfBirth: "",
                    department: "",
                    major: "",
                    gpa: "",
                    yearOfStudy: "",
                    address: "",
                    nationality: "",
                    username: "",
                    password: "",
                });
            })
            .catch((err) => {
                console.error(err);
                setResponseStatus({
                    status: false,
                    response: "Error while adding student!",
                });
            });
    };

    const handleClickPrevious = () => {
        navigate("/");
    };

    useEffect(() => {
        if (responseStatus.response) {
            const timer = setTimeout(() => {
                setResponseStatus({ status: null, response: "" });
            }, 3000);
            setLoading(false);
            return () => clearTimeout(timer);
        }
    }, [responseStatus]);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-md shadow-lg max-w-2xl w-full"
            >
                <h1 className="text-3xl font-semibold text-center mb-6 text-gray-700">
                    Student Registration Form
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium text-gray-600">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">
                            Phone Number
                        </label>
                        <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium text-gray-600">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">Date of Birth</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">Department</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">Major</label>
                        <input
                            type="text"
                            name="major"
                            value={formData.major}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">GPA</label>
                        <input
                            type="number"
                            step="0.01"
                            name="gpa"
                            value={formData.gpa}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">Year of Study</label>
                        <input
                            type="number"
                            name="yearOfStudy"
                            value={formData.yearOfStudy}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">Nationality</label>
                        <input
                            type="text"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                </div>


                <div className="mt-6">
                    <button
                        type="submit"
                        className={`py-3 px-6 rounded-md w-full ${
                            loading
                                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                                : "bg-blue-500 text-white hover:bg-blue-600 transition-all"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>

            {responseStatus.response && (
                <div
                    className={`fixed top-4 left-1/2 transform -translate-x-1/2 mt-4 p-4 rounded shadow-lg transition-opacity duration-300 ${
                        responseStatus.status
                            ? "bg-green-100 text-green-700 border border-green-300 opacity-100"
                            : "bg-red-100 text-red-700 border border-red-300 opacity-100"
                    }`}
                    style={{ opacity: responseStatus.response ? 1 : 0 }}
                >
                    {responseStatus.response}
                </div>
            )}
            <button
                onClick={handleClickPrevious}
                className="mt-4 py-2 px-4 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-md transition-all"
            >
                Back
            </button>
        </div>
    );
};

export default StudentForm;
