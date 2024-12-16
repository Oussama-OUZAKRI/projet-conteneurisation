import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import photoProfil from '/photo-profil.jpg';

const StudentDetails = () => {
    const [student, setStudent] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/v1/students/${id}`)
                .then(res => setStudent(res.data))
                .catch(err => console.error(err))
        }
    }, [id]);

    const handleClickPrevious = () => {
        navigate("/");
    };

    if (!student) {
        return (
            <div className="container mx-auto p-6 text-center">
                <p className="text-gray-500">Chargement des données de l'étudiant...</p>
            </div>
        );
    }

    return (
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
            <button
                onClick={handleClickPrevious}
                className="mt-4 py-2 px-4 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-md transition-all"
            >
                Back
            </button>
        </div>
    );
};

export default StudentDetails;
