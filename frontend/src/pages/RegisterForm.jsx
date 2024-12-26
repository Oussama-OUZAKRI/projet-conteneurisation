import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Submitted registration data:', formData);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/v1/auth/register`,
                {
                    name: formData.name,
                    email: formData.username,
                    password: formData.password,
                    roles: "admin"
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            console.log('Registration response:', response.data);
            setSuccessMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.');
            setError('');

            // Redirection vers la page de connexion
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            console.error('Full error:', err);
            if (err.response) {
                console.error('Error response data:', err.response.data);
                setError("Erreur d'inscription. Veuillez vérifier vos informations.");
            } else if (err.request) {
                console.error('Error request:', err.request);
                setError('Pas de réponse du serveur. Veuillez réessayer.');
            } else {
                console.error('Axios error:', err.message);
                setError('Une erreur est survenue.');
            }
            setSuccessMessage('');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-80"
            >
                <h2 className="text-2xl font-semibold text-center mb-4">Inscription</h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Nom complet
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md mt-2"
                        placeholder="Entrez votre nom complet"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                        Nom d'utilisateur
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md mt-2"
                        placeholder="Entrez votre nom d'utilisateur"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md mt-2"
                        placeholder="Entrez votre mot de passe"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    S'inscrire
                </button>
            </form>
            <button
                className="w-80 mt-8 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                onClick={() => navigate("/login")}
            >
                Se connecter
            </button>

        </div>
    );
};

export default RegistrationForm;
