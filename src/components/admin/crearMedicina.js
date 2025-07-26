import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormMedicinasProductos = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "Medicina",
    descripcion: "",
    precio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí podrías enviar a tu backend si quieres
    console.log("Guardando:", formData);

    Swal.fire({
      title: "¡Guardado!",
      text: "El producto o medicina fue registrado correctamente.",
      icon: "success",
      confirmButtonColor: "#f0ad4e",
      confirmButtonText: "Aceptar",
    }).then(() => {
      navigate("/medicinas");
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h3 className="mb-4 text-center fw-bold text-primary">
                Agregar Medicina o Producto
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control rounded-pill px-4 py-2"
                    placeholder="Ej: Ibuprofeno"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Tipo</label>
                  <select
                    name="tipo"
                    className="form-select rounded-pill px-4 py-2"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                  >
                    <option value="Medicina">Medicina</option>
                    <option value="Producto">Producto</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Descripción</label>
                  <textarea
                    name="descripcion"
                    className="form-control rounded-3 px-3 py-2"
                    placeholder="Detalles del producto o medicina"
                    value={formData.descripcion}
                    onChange={handleChange}
                    rows="3"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Precio ($)</label>
                  <input
                    type="number"
                    name="precio"
                    className="form-control rounded-pill px-4 py-2"
                    value={formData.precio}
                    onChange={handleChange}
                    step="0.01"
                    placeholder="0.00"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning text-dark w-100 rounded-pill fw-semibold py-2"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>

          <div className="text-center mt-3">
            <button
              onClick={() => navigate("/medicinas")}
              className="btn btn-link text-decoration-none text-muted"
            >
              ← Volver a la lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMedicinasProductos;
