import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const FormularioMascota = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombreMascota: "",
    especieMascota: "",
    razaMascota: "",
    edadMascota: "",
    pesoMascota: "",
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

    // Aquí iría la lógica para guardar la mascota (ej: axios.post)
    console.log("Mascota registrada:", formData);

    toast.success("Mascota registrada", {
      style: {
    backgroundColor: "#3a7d44 ", // azul oscuro
    color: "white",
    fontWeight: "bold",
  },
    });
    setTimeout(() => {
      navigate("/mascotas");
    }, 1500);
  };

  return (
    <div className="container p-4">
      <Toaster position="bottom-right" richColors/>
      <h2 className="mb-4 fw-bold">Registrar Mascota</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded-4 bg-white" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombreMascota"
            value={formData.nombreMascota}
            onChange={handleChange}
            required
            placeholder="Ej: Firulais"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Especie</label>
          <input
            type="text"
            className="form-control"
            name="especieMascota"
            value={formData.especieMascota}
            onChange={handleChange}
            required
            placeholder="Ej: Perro, Gato..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Raza</label>
          <input
            type="text"
            className="form-control"
            name="razaMascota"
            value={formData.razaMascota}
            onChange={handleChange}
            required
            placeholder="Ej: Labrador, Siamés..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Edad (años)</label>
          <input
            type="number"
            className="form-control"
            name="edadMascota"
            value={formData.edadMascota}
            onChange={handleChange}
            required
            min="0"
            step="0.1"
            placeholder="Ej: 3.5"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Peso (kg)</label>
          <input
            type="number"
            className="form-control"
            name="pesoMascota"
            value={formData.pesoMascota}
            onChange={handleChange}
            required
            min="0"
            step="0.1"
            placeholder="Ej: 7.2"
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

export default FormularioMascota;
