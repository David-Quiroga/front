import React, { useState } from "react";
import { Link } from "react-router-dom";


// Estados posibles de una cita
const estados = ["Pendiente", "Confirmada", "Cancelada"];

const GestionCitas = () => {
  // Estado para lista de citas
  const [citas, setCitas] = useState([
    {
      id: 1,
      cliente: "Juan Pérez",
      servicio: "Consulta General",
      fecha: "2025-08-01",
      hora: "10:00",
      estado: "Pendiente",
    },
    {
      id: 2,
      cliente: "María Gómez",
      servicio: "Vacunas",
      fecha: "2025-08-02",
      hora: "14:30",
      estado: "Confirmada",
    },
  ]);



  // Cambiar estado cita
  const cambiarEstado = (id, nuevoEstado) => {
    setCitas(
      citas.map((c) => (c.id === id ? { ...c, estado: nuevoEstado } : c))
    );
  };

  // Eliminar cita
  const eliminarCita = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta cita?")) {
      setCitas(citas.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="container p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gestion de citas</h2>
        <Link to='/crear-servicio'
            className="btn btn-warning btn-sm fw-semibold"
            style={{
                padding: "10px 20px",
                fontSize: "0.85rem",
                borderRadius: "6px",
                maxWidth: "fit-content",
                whiteSpace: "nowrap",
            }}>
                Agregar Cita
        </Link>
    </div>

      <h5>Lista de Citas</h5>
      {citas.length === 0 ? (
        <p>No hay citas programadas.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {citas.map(({ id, cliente, servicio, fecha, hora, estado }) => (
                <tr key={id}>
                  <td>{cliente}</td>
                  <td>{servicio}</td>
                  <td>{fecha}</td>
                  <td>{hora}</td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      value={estado}
                      onChange={(e) => cambiarEstado(id, e.target.value)}
                    >
                      {estados.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarCita(id)}
                    >
                      <i className="bi bi-trash"></i> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GestionCitas;
