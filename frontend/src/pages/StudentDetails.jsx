import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import photoProfil from '/photo-profil.jpg';
import isTokenExpired from '../utils/isTokenExpired';

const StudentDetails = () => {
    const [student, setStudent] = useState([]);
    const [courses, setCourses] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newCourse, setNewCourse] = useState({
        name: '',
        grade: '',
        instructor: ''
    });
    const [responseStatus, setResponseStatus] = useState({
        status: null,
        response: "",
    });
    const navigate = useNavigate();
    const { id } = useParams();

    const token = localStorage.getItem('jwtToken'); 
    if (!token || isTokenExpired(token)) {
        localStorage.removeItem('jwt');
        navigate('/login'); 
    }

    useEffect(() => {
        if (id) {
            axios.get(`${import.meta.env.VITE_API_URL}/api/v1/students/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => setStudent(res.data))
                .catch(err => console.error(err))
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            axios.get(`${import.meta.env.VITE_API_URL}/api/v1/students/${id}/courses`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => setCourses(res.data))
            .catch(err => console.error(err))
        }
    }, [id, responseStatus])

    const handleClickPrevious = () => {
        navigate("/");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCourse({
            ...newCourse,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCourse.name && newCourse.grade && newCourse.instructor) {
            axios.post(`${import.meta.env.VITE_API_URL}/api/v1/students/${student.id}/courses`, newCourse)
                .then(res => {
                    setNewCourse({ name: '', grade: '', instructor: '' });
                    setIsFormVisible(false);
                    setResponseStatus({
                        status: true,
                        response: "Course added successfully!",
                    });
                })
                .catch(err => {
                    console.error(err);
                    setResponseStatus({
                        status: false,
                        response: "Error while adding the course!",
                    });
                })
        }
    };

    useEffect(() => {
        if (responseStatus.response) {
            const timer = setTimeout(() => {
                setResponseStatus({ status: null, response: "" });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [responseStatus]);

    if (!student && !courses) {
        return (
            <div className="container mx-auto p-6 text-center">
                <p className="text-gray-500">Chargement des données de l'étudiant...</p>
            </div>
        );
    }

    return (
    <>
        <div className="container mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200 relative">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Profil de l'étudiant {student.firstName}</h2>
                <div className="flex items-center">
                    <img
                        src={student.photoUrl ? student.photoUrl : photoProfil}
                        alt="Photo de profil"
                        className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow-sm"
                    />
                </div>
            </div>

            {/* Section: Informations personnelles */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold text-blue-600 border-b-2 border-blue-200 pb-2 mb-4">Informations personnelles</h3>
                <div className="bg-white p-5 rounded-lg shadow-sm divide-y divide-gray-200">
                    {[
                        { label: "Prénom", value: student.firstName, icon: "👤" },
                        { label: "Nom de famille", value: student.lastName, icon: "📛" },
                        { label: "Email", value: student.email, icon: "✉️" },
                        { label: "Numéro de téléphone", value: student.phoneNumber, icon: "📞" },
                        { label: "Sexe", value: student.gender, icon: "🚻" },
                        { label: "Date de naissance", value: student.dateOfBirth, icon: "🎂" },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center py-3">
                            <div className="w-1/3 text-xl text-gray-500 mr-4">
                                <span className="mr-3">{item.icon}</span>
                                <span className="font-medium">{item.label}:</span>
                            </div>
                            <div className="w-2/3 text-gray-800">{item.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section: Données académiques */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold text-green-600 border-b-2 border-green-200 pb-2 mb-4">Données académiques</h3>
                <div className="bg-white p-5 rounded-lg shadow-sm divide-y divide-gray-200">
                    {[
                        { label: "Numéro matricule", value: student.id, icon: "🔖" },
                        { label: "Date d'inscription", value: student.enrollmentDate, icon: "📅" },
                        { label: "Département", value: student.department, icon: "🏫" },
                        { label: "Spécialisation", value: student.major, icon: "🔬" },
                        { label: "Moyenne générale", value: student.gpa, icon: "📊" },
                        { label: "Année d'étude", value: student.yearOfStudy, icon: "🎓" },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center py-3">
                            <div className="w-1/3 text-xl text-gray-500 mr-4">
                                <span className="mr-3">{item.icon}</span>
                                <span className="font-medium">{item.label}:</span>
                            </div>
                            <div className="w-2/3 text-gray-800">{item.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section: Données administratives */}
            <section>
                <h3 className="text-xl font-semibold text-red-600 border-b-2 border-red-200 pb-2 mb-4">Données administratives</h3>
                <div className="bg-white p-5 rounded-lg shadow-sm divide-y divide-gray-200">
                    {[
                        { label: "Adresse", value: student.address, icon: "🏠" },
                        { label: "Nationalité", value: student.nationality, icon: "🌍" },
                        { label: "Nom d'utilisateur", value: student.username, icon: "👤" },
                        { label: "Mot de passe", value: student.password, icon: "🔒" },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center py-3">
                            <div className="w-1/3 text-xl text-gray-500 mr-4">
                                <span className="mr-3">{item.icon}</span>
                                <span className="font-medium">{item.label}:</span>
                            </div>
                            <div className="w-2/3 text-gray-800">{item.value}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        <div className="container mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Liste des Cours</h2>
            <button
                onClick={() => setIsFormVisible(!isFormVisible)}
                className="mb-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            >
                {isFormVisible ? 'Annuler' : 'Ajouter un cours'}
            </button>

            {/* Formulaire d'ajout de cours */}
            {isFormVisible && (
                <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">Nom du cours</label>
                        <input
                            type="text"
                            name="name"
                            value={newCourse.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">Note</label>
                        <input
                            type="number"
                            name="grade"
                            value={newCourse.grade}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">Professeur</label>
                        <input
                            type="text"
                            name="instructor"
                            value={newCourse.instructor}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
                    >
                        Ajouter le cours
                    </button>
                </form>
            )}

            <table className="min-w-full bg-white table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Nom du cours</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Note</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Professeur</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.length > 0 ? (
                        courses.map((course, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-gray-50 border-b ${
                                    course.grade >= 11 ? "bg-green-100" : "bg-red-100"
                                }`}
                            >
                                <td className="py-3 px-4 text-sm text-gray-800">{course.name}</td>
                                <td className="py-3 px-4 text-sm text-gray-800">{course.grade}</td>
                                <td className="py-3 px-4 text-sm text-gray-800">{course.instructor}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="3"
                                className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                            >
                                Aucun cours trouvé.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <div className="w-full text-center">
            <button
                onClick={handleClickPrevious}
                className="bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-md transition-all mb-8 py-2 px-4"
            >
                Back
            </button>
        </div>
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
    </>
    );
};

export default StudentDetails;
