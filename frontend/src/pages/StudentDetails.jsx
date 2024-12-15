import { useState } from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
    const [student, setStudent] = useState(null);
    const [courses, setCourses] = useState(null);

    return (
        <div>
            <h1>Détails de l'étudiant: </h1>
            <Link to={`/add-note/${id}`}>Ajouter une note</Link>
            <table>
                <thead>
                    <tr>Cours</tr>
                    <tr>Note</tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
}

export default StudentDetails;