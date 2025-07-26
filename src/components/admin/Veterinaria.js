import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Restaurantess.css";
import { Modal, Button } from "react-bootstrap";



const Veterinaria = () => {
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
    },
    {
      id: 2,
      nombre: "Clínica Veterinaria Los Andes",
      rating: 4.9,
      direccion: "Calle 45 #67-89, Norte",
      telefono: "+1 234 567 8901",
      horario: "Lun-Dom: 24 horas",
      servicios: ["Emergencias 24h", "Hospitalización", "Laboratorio"]
    },
    {
      id: 3,
      nombre: "Pet Care Center",
      rating: 4.7,
      direccion: "Carrera 12 #54-56, Sur",
      telefono: "+1 234 567 8902",
      horario: "Lun-Vie: 7:00-19:00",
      servicios: ["Consulta", "Vacunación", "Peluquería", "Hotel"]
    }
  ];

  return (
    <div className="restaurantes-container min-vh-100 w-100">
      <h2 className="restaurantes-titleytext-center">Mis Veterinarias</h2>

      <div className="d-flex justify-content-start mt-5 mb-4 ms-4">
        <Link to="/crear-veterinaria" className="btn btn-warning text-dark">
          Agregar Veterinaria
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

export default Veterinaria;