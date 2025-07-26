import React from "react";
import "../../styles/servicios.css"
import { Link } from "react-router-dom";


const servicios = [
  {
    id: 1,
    nombre: "Consulta General",
    descripcion: "Examen médico completo para diagnóstico y seguimiento",
    precio: 25.0,
    icono: "🩺", // Puedes usar iconos de react-icons o imágenes
    colorIcono: "#3b82f6", // azul
  },
  {
    id: 2,
    nombre: "Peluquería",
    descripcion: "Servicios de aseo y estética para mascotas",
    precio: 15.0,
    icono: "✂️",
    colorIcono: "#fbbf24", // amarillo/naranja claro
  },
  {
    id: 3,
    nombre: "Vacunas",
    descripcion: "Programa completo de vacunación preventiva",
    precio: 12.0,
    icono: "💉",
    colorIcono: "#10b981", // verde
  },
  {
    id: 4,
    nombre: "Eutanasia",
    descripcion: "Procedimiento humanitario con acompañamiento",
    precio: 50.0,
    icono: "🤍",
    colorIcono: "#6b7280", // gris oscuro
  },
  {
    id: 5,
    nombre: "Cirugía",
    descripcion: "Procedimientos quirúrgicos especializados",
    precio: 150.0,
    icono: "⚡",
    colorIcono: "#ef4444", // rojo
  },
];

const ServiciosVeterinarios = () => {
  return (
    <div className="container p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Servicios Veterinarios</h2>
        <Link to='/crear-servicio'
            className="btn btn-warning btn-sm fw-semibold"
            style={{
                padding: "10px 20px",
                fontSize: "0.85rem",
                borderRadius: "6px",
                maxWidth: "fit-content",
                whiteSpace: "nowrap",
            }}>
                Agregar Servicio
        </Link>
    </div>

      <div className="row g-3">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="col-12 col-sm-6 col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div
                    className="icon-circle d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: servicio.colorIcono,
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    {servicio.icono}
                  </div>
                  <span className="fw-bold text-warning">${servicio.precio.toFixed(2)}</span>
                </div>

                <h5 className="card-title fw-bold">{servicio.nombre}</h5>
                <p className="card-text text-muted">{servicio.descripcion}</p>

                <div className="d-flex gap-2 mb-2">
                  <button className="btn btn-outline-secondary btn-sm flex-grow-1">
                    <i className="bi bi-trash"></i> Eliminar
                  </button>
                  <button className="btn btn-warning btn-sm flex-grow-1 text-dark">
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosVeterinarios;
