import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Restaurantess.css";

const MisPropietarios = () => {
  const propietarios = [
    {
      id: 1,
      nombre: "Carlos Pérez",
      cedula: "1102345678",
      telefono: "+593 99 123 4567",
      correo: "carlos.perez@mail.com",
    },
    {
      id: 2,
      nombre: "Ana Rodríguez",
      cedula: "1108765432",
      telefono: "+593 98 765 4321",
      correo: "ana.rod@mail.com",
    },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Lista de Propietarios</h2>
        <Link
          to="/crear-propietario"
          className="btn btn-warning btn-sm fw-semibold"
          style={{
            padding: "8px 16px",
            fontSize: "0.85rem",
            borderRadius: "6px",
            maxWidth: "fit-content",
            textDecoration: "none",
          }}
        >
          Agregar Propietario
        </Link>
      </div>

      <div className="row">
        {propietarios.map((prop) => (
          <div key={prop.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card border-0 shadow-sm rounded-4 p-3">
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle bg-warning text-white d-flex justify-content-center align-items-center me-3" style={{ width: 50, height: 50, fontWeight: "bold" }}>
                  {prop.nombre[0]}
                </div>
                <div>
                  <h5 className="mb-0 fw-bold">{prop.nombre}</h5>
                  <small className="text-muted">ID: {prop.id}</small>
                </div>
              </div>

              <ul className="list-unstyled mb-3">
                <li><i className="bi bi-credit-card me-2 text-secondary"></i>{prop.cedula}</li>
                <li><i className="bi bi-telephone me-2 text-secondary"></i>{prop.telefono}</li>
                <li><i className="bi bi-envelope me-2 text-secondary"></i>{prop.correo}</li>
              </ul>

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {propietarios.length === 0 && (
        <div className="text-center text-muted">No hay propietarios registrados.</div>
      )}
    </div>
  );
};

export default MisPropietarios;
