import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/students')
            .then(res => res.json())
            .then(data => setStudents(data))
            .catch(err => console.error(err));
    }, []);

    const handleStudentDetail = (id) => {
        navigate(`/students/${id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des étudiants</h1>
            <div className="mb-4">
                <Link
                    to="/add-student"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Ajouter un étudiant
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Id</th>
                            <th className="border border-gray-300 px-4 py-2">Nom</th>
                            <th className="border border-gray-300 px-4 py-2">Date de Création</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleStudentDetail(student.id)}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {student.id}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {student.name || "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {student.dateCreation}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                                >
                                    Aucun étudiant trouvé.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentsList;