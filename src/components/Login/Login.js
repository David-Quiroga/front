import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/loginServices";
import "../../styles/Auth.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ emailUser: "", passwordUser: "" });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.emailUser || !formData.passwordUser) {
        setError("Todos los campos son requeridos.");
        return;
    }
    try {
        await loginService.login(formData.emailUser, formData.passwordUser);
        navigate("/inicio");
    } catch (error) {
        setError("Credenciales incorrectas");
    }
};

    return (
        <motion.div 
            className="auth-container"
            initial="initial"
            animate="animate"
            exit="exit"
        >
        <div className="auth-content">
            <div className="auth-left">
                <h1 className="auth-title">Pet Pocket</h1>
                <p className="auth-slogan">Cuidar de ellos es tu mision</p>
                <p className="auth-slogan">Amamos a tu mascota ❤</p>
            </div>
        <div className="auth-right">
            <div className="auth-card">
                <h2 className="text-center">Inicio de Sesión</h2>
                {error && <div className="text-center text-red-500">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <input type="email" id="emailUser" className="auth-input" value={formData.emailUser} onChange={handleChange} placeholder="Correo Electrónico" />
                    <input type="password" id="passwordUser" className="auth-input" value={formData.passwordUser} onChange={handleChange} placeholder="Contraseña" />
                    <button type="submit" className="auth-button">Iniciar Sesión</button>
                </form>
                    <div className="text-center mt-4">
                        <Link to="/registro" className="auth-link">¿No tienes una cuenta? Regístrate</Link>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Login;