import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion} from "framer-motion";
import authService from "../../services/registerServices";
import "../../styles/Auth.css";  // Se mantiene Auth.css para ambos


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nameUsers: "",
    emailUser: "",
    passwordUser: "",
    phoneUser: "",
    userName: "",
    statsBuffer: 'active'
  });
  const [error, setError] = useState(null);
  const [passwordUserMessage, setpasswordUserMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));

    if (id === "passwordUser") {
      if (value.length < 8) {
        setpasswordUserMessage("La contraseña debe tener al menos 8 caracteres.");
      }else {
        setpasswordUserMessage("Contraseña segura.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }
    if (Object.values(formData).some((value) => !value)) {
      setError("Todos los campos son requeridos.");
      return;
    }
    if (!emailRegex.test(formData.emailUser)) {
      setError("El correo electrónico no es válido.");
      return;
    }
    try {
      await authService.register(formData);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <motion.div 
      className="auth-container"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="auth-background"></div>
      <div className="auth-content">
        <div className="auth-left">
          <h1 className="auth-title">Pet Pocket</h1>
          <p className="auth-slogan">Unete a la familia Pet Pocket</p>
        </div>
        <div className="auth-right">
          <div className="auth-card">
            <h2 className="text-center">Registro</h2>
            {error && <div className="text-center text-red-500" aria-live="polite">{error}</div>}
            <form onSubmit={handleSubmit}>
              {["nameUsers", "phoneUser", "emailUser", "passwordUser", "userName"].map((id) => (
                <input 
                  key={id} 
                  type={id === "passwordUser" ? "passwordUser" : "text"} 
                  id={id} 
                  className="auth-input" 
                  value={formData[id]} 
                  onChange={handleChange} 
                  placeholder={id} 
                />
              ))}
              {passwordUserMessage && <p className="text-sm text-yellow-500">{passwordUserMessage}</p>}
              <label className="auth-checkbox">
                <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
                Acepto los <Link to="/terms" className="auth-link">términos y condiciones</Link>.
              </label>
              <div className="mt-1">
                <button type="submit" className="auth-button">Registrarse</button>
              </div>
            </form>
            <div className="text-center mt-1">
              <Link to="/login" className="auth-link">¿Ya tienes una cuenta? Inicia sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
