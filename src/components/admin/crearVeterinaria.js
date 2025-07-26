import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // <-- Importa useNavigate
import "../../styles/Restaurantess.css";
import "../../styles/Formularios.css";

const FormularioVeterinaria = () => {
  const navigate = useNavigate(); // <-- Inicializa navigate

  const [formData, setFormData] = useState({
    nameVeterinaria: "",
    addressVeterinaria: "",
    phoneVeterinaria: "",
    timeveterinaria: "",
    serviceVeterinaria: "",
    ratingVeterinaria: "",
    stateVeterinaria: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos enviados:", formData);
    Swal.fire("Guardado", "Veterinaria registrada correctamente", "success").then(() => {
      setFormData({
        nameVeterinaria: "",
        addressVeterinaria: "",
        phoneVeterinaria: "",
        timeveterinaria: "",
        serviceVeterinaria: "",
        ratingVeterinaria: "",
        stateVeterinaria: "",
      });
      navigate("/inicio");  // <-- Aquí rediriges
    });
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Registrar Veterinaria</h2>
      <form onSubmit={handleSubmit} className="form-veterinaria">
        <label>
          Nombre de la Veterinaria <span className="">*</span>
          <input
            type="text"
            name="nameVeterinaria"
            value={formData.nameVeterinaria}
            onChange={handleChange}
            placeholder="Ej: Clínica Patitas"
            
          />
        </label>

        <label>
          Dirección <span className="">*</span>
          <input
            type="text"
            name="addressVeterinaria"
            value={formData.addressVeterinaria}
            onChange={handleChange}
            placeholder="Ej: Av. Central #123"
            
          />
        </label>

        <label>
          Teléfono
          <input
            type="tel"
            name="phoneVeterinaria"
            value={formData.phoneVeterinaria}
            onChange={handleChange}
            placeholder="Ej: 0991234567"
          />
        </label>

        <label>
          Horario de Atención
          <input
            type="text"
            name="timeveterinaria"
            value={formData.timeveterinaria}
            onChange={handleChange}
            placeholder="Ej: Lunes a Viernes 08:00 - 18:00"
          />
        </label>

        <label>
          Servicios que Ofrece
          <input
            type="text"
            name="serviceVeterinaria"
            value={formData.serviceVeterinaria}
            onChange={handleChange}
            placeholder="Ej: Vacunación, esterilización"
          />
        </label>

        <label>
          Rating (1 a 5)
          <input
            type="number"
            name="ratingVeterinaria"
            value={formData.ratingVeterinaria}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
          />
        </label>

        <label>
          Estado
          <select
            name="stateVeterinaria"
            value={formData.stateVeterinaria}
            onChange={handleChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </label>

        <button type="submit" className="btn-submit">
          Guardar Veterinaria
        </button>
      </form>
    </div>
  );
};

export default FormularioVeterinaria;
