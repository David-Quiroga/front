import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom"

const mascotas = [
  {
    id: 1,
    nombre: "Firulais",
    especie: "Perro",
    raza: "Labrador",
    edad: 3.5,
    peso: 25.3,
  },
  {
    id: 2,
    nombre: "Misu",
    especie: "Gato",
    raza: "Siames",
    edad: 2.1,
    peso: 4.8,
  },
  {
    id: 3,
    nombre: "Rocky",
    especie: "Perro",
    raza: "Bulldog",
    edad: 4,
    peso: 20.0,
  },
];

const VistaMascotasAlternativa = () => {
  return (
    <div className="container p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Lista de mascotas</h2>
        <Link to='/crear-mascota'
            className="btn btn-warning btn-sm fw-semibold"
            style={{
                padding: "10px 20px",
                fontSize: "0.85rem",
                borderRadius: "6px",
                maxWidth: "fit-content",
                whiteSpace: "nowrap",
            }}>
                Agregar Mascota
        </Link>
    </div>

      <Accordion defaultActiveKey="0">
        {mascotas.map((mascota, index) => (
          <Accordion.Item eventKey={index.toString()} key={mascota.id}>
            <Accordion.Header>
              <strong>{mascota.nombre}</strong> — {mascota.especie}
            </Accordion.Header>
            <Accordion.Body>
              <div className="mb-2">
                <i className="bi bi-geo me-2"></i>
                <strong>Raza:</strong> {mascota.raza}
              </div>
              <div className="mb-2">
                <i className="bi bi-clock-history me-2"></i>
                <strong>Edad:</strong> {mascota.edad} años
              </div>
              <div className="mb-2">
                <i className="bi bi-thermometer-half me-2"></i>
                <strong>Peso:</strong> {mascota.peso} kg
              </div>

              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="bi bi-trash"></i> Eliminar
                </button>
                <button className="btn btn-warning btn-sm text-dark">
                  <i className="bi bi-pencil-square"></i> Editar
                </button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default VistaMascotasAlternativa;
