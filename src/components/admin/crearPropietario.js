import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap-icons/font/bootstrap-icons.css";

const FormularioPropietario = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombrePropietario: "",
    cedulaPropietario: "",
    telefonoPropietario: "",
    correoPropietario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí enviarías los datos al backend
    console.log("Datos enviados:", formData);

    Swal.fire({
      icon: "success",
      title: "Propietario registrado",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/propietarios");
  };

  return (
    <div className="container p-4">
      <h2 className="mb-4 fw-bold">Registrar Propietario</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded-4 bg-white" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            className="form-control"
            name="nombrePropietario"
            value={formData.nombrePropietario}
            onChange={handleChange}
            required
            placeholder="Ej: María González"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Cédula</label>
          <input
            type="text"
            className="form-control"
            name="cedulaPropietario"
            value={formData.cedulaPropietario}
            onChange={handleChange}
            required
            placeholder="Ej: 1101234567"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            name="telefonoPropietario"
            value={formData.telefonoPropietario}
            onChange={handleChange}
            required
            placeholder="Ej: +593 99 123 4567"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="correoPropietario"
            value={formData.correoPropietario}
            onChange={handleChange}
            required
            placeholder="Ej: ejemplo@correo.com"
          />
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-warning fw-semibold text-dark px-4">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioPropietario;