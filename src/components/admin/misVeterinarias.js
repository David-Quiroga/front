import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Restaurantess.css";
import { Modal, Button } from "react-bootstrap";



const MisVeterinarias = () => {
  // Datos de ejemplo (deberías reemplazarlos con tus datos reales)
  const veterinarias = [
    {
      id: 1,
      nombre: "PET POCKET",
      rating: 4.8,
      direccion: "Aix Principal 123, Centro",
      telefono: "+1 234 567 8900",
      horario: "Lun-Vie: 6:00, 18:00, Sáb-Dom: 9:00, 14:00",
      servicios: ["Consulta", "Cirugía", "Emergencias", "Peluquería"]
    }
  ];

  return (
    <div className="container p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Mis Veterinarias</h2>
        <Link
  to="/crear-veterinaria"
  className="btn btn-warning btn-sm fw-semibold text-decoration-none"
  style={{
    padding: "6px 12px",
    fontSize: "0.85rem",
    borderRadius: "6px",
    maxWidth: "fit-content",
    whiteSpace: "nowrap",
    outline: "none",
    boxShadow: "none",
  }}
>
  Agregar Veterinarias
</Link>
      </div>
      <div className="veterinarias-grid">
        {veterinarias.map((veterinaria) => (
          <div key={veterinaria.id} className="veterinaria-card">
            <div className="card-header">
              <h3>{veterinaria.nombre}</h3>
              <span className="rating">{veterinaria.rating}</span>
            </div>
            
            <div className="contact-info">
              <p className="address">{veterinaria.direccion}</p>
              <p className="phone">{veterinaria.telefono}</p>
            </div>
            
            <p className="schedule">{veterinaria.horario}</p>
            
            <div className="services-section">
              <p className="services-title">Servicios:</p>
              <div className="services-list">
                {veterinaria.servicios.map((servicio, index) => (
                  <span key={index} className="service-tag">{servicio}</span>
                ))}
              </div>
            </div>
            
            <div className="divider"></div>
            
            <div className="action-buttons">
              <button className="btn btn-sm btn-warning">
                <i className="bi bi-arrow-repeat"></i> Actualizar
              </button>
              <button className="btn btn-sm btn-danger">
                <i className="bi bi-trash"></i> Eliminar
              </button>
              <Link to="/dashboard"className="btn btn-sm btn-info">Gestionar</Link>
            </div>
          </div>
        ))}
      </div>
      {/* Modal de ejemplo (invisible por defecto) */}
      <Modal show={false}>
        <Modal.Header>
          <Modal.Title>
            <i className="bi bi-pencil-square me-2"></i>
            Actualizar Veterinaria
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre de la Veterinaria</label>
              <input
                type="text"
                className="form-control"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ubicación</label>
              <input
                type="text"
                className="form-control"
                name="ubicacion"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Objetivos</label>
              <input
                type="text"
                className="form-control"
                name="objetivos"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                name="descripcion"
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-warning text-dark" style={{
            backgroundColor: "#f39c12",
            borderColor: "#f39c12",
            color: "#000",
          }}>
            Cancelar
          </Button>
          <Button className="btn btn-warning text-dark" style={{
            backgroundColor: "#f39c12",
            borderColor: "#f39c12",
            color: "#000",
          }}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MisVeterinarias;