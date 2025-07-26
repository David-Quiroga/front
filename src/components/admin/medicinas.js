import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    nombre: "Antibiótico X",
    tipo: "Medicina",
    descripcion: "Para infecciones bacterianas",
    precio: 10.5,
  },
  {
    id: 2,
    nombre: "Shampoo para Perros",
    tipo: "Producto",
    descripcion: "Para limpieza y cuidado del pelaje",
    precio: 8.0,
  },
  {
    id: 3,
    nombre: "Antiparasitario",
    tipo: "Medicina",
    descripcion: "Desparasitación interna",
    precio: 12.0,
  },
];

const MedicinasYProductos = () => {
  return (
    <div className="container p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Medicinas y Productos</h2>
        <Link
          to="/crear-medicina"
          className="btn btn-warning btn-sm fw-semibold"
          style={{
            padding: "10px 20px",
            fontSize: "0.85rem",
            borderRadius: "6px",
            maxWidth: "fit-content",
            whiteSpace: "nowrap",
          }}
        >
          Agregar medicina o producto
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Precio ($)</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td className="fw-semibold">{item.nombre}</td>
                <td>
                  <span
                    className={`badge ${
                      item.tipo === "Medicina" ? "bg-primary" : "bg-success"
                    }`}
                  >
                    {item.tipo}
                  </span>
                </td>
                <td>{item.descripcion}</td>
                <td className="fw-bold text-warning">
                  ${item.precio.toFixed(2)}
                </td>
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-trash"></i>
                    </button>
                    <button className="btn btn-warning btn-sm text-dark">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-muted py-3">
                  No hay productos ni medicinas registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicinasYProductos;
