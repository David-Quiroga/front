import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormularioServicio = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombreServicio: "",
    descripcionServicio: "",
    precioServicio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "precioServicio" ? parseFloat(value) || "" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombreServicio, descripcionServicio, precioServicio } = formData;

    if (!nombreServicio || !descripcionServicio || !precioServicio) {
      Swal.fire("Completa todos los campos", "", "warning");
      return;
    }

    // Aquí iría tu lógica para guardar el servicio
    console.log("Servicio enviado:", formData);

    Swal.fire({
      title: "Servicio guardado",
      text: "Redirigiendo a la lista de servicios...",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      navigate("/servicios");
    });
  };

  return (
    <div className="container mt-4 p-4 rounded shadow-sm bg-white" style={{ maxWidth: "600px" }}>
      <h4 className="mb-4 fw-bold">Registrar Nuevo Servicio</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre del Servicio</label>
          <input
            type="text"
            className="form-control"
            name="nombreServicio"
            value={formData.nombreServicio}
            onChange={handleChange}
            placeholder="Ej. Consulta general"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            name="descripcionServicio"
            rows="3"
            value={formData.descripcionServicio}
            onChange={handleChange}
            placeholder="Describe el servicio ofrecido"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Precio (USD)</label>
          <input
            type="number"
            className="form-control"
            name="precioServicio"
            value={formData.precioServicio}
            onChange={handleChange}
            placeholder="Ej. 25.50"
            step="0.01"
            min="0"
          />
        </div>

        <button type="submit" className="btn btn-warning fw-semibold">
          Guardar Servicio
        </button>
      </form>
    </div>
  );
};

export default FormularioServicio;
