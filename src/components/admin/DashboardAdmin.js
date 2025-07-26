import React from "react";
import "../../styles/Dashboard.css"; // Import the new CSS file

const Dashboard = () => {
  // Data for the cards, including icons
  const dashboardStats = [
    {
      title: "Total de Citas",
      value: "156",
      icon: "bi bi-calendar-check", // Bootstrap Icons
      colorClass: "card-icon-blue",
    },
    {
      title: "Nuevos Pacientes",
      value: "23",
      icon: "bi bi-person-plus",
      colorClass: "card-icon-green",
    },
    {
      title: "Ganancias (Mes)",
      value: "S/. 12,450",
      icon: "bi bi-currency-dollar",
      colorClass: "card-icon-orange",
    },
    {
      title: "Crecimiento (%)",
      value: "+15%",
      icon: "bi bi-graph-up",
      colorClass: "card-icon-purple",
    },
    {
      title: "Ingresos Totales",
      value: "S/. 3,291,922",
      icon: "bi bi-cash-stack",
      colorClass: "card-icon-teal",
    },
    {
      title: "Pedidos de Hoy",
      value: "290",
      icon: "bi bi-box-seam",
      colorClass: "card-icon-red",
    },
    {
      title: "Ventas en Tienda",
      value: "10",
      icon: "bi bi-shop",
      colorClass: "card-icon-yellow",
    },
    {
      title: "Pedidos Pendientes",
      value: "100",
      icon: "bi bi-exclamation-triangle",
      colorClass: "card-icon-gray",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2 className="dashboard-title">
          <i className="bi bi-heart-pulse-fill me-3"></i>Panel de Control de Veterinaria
        </h2>
        <div className="dashboard-date">
          <span>Hoy: {new Date().toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      <div className="row mt-4">
        {dashboardStats.map((stat, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="dashboard-card h-100 shadow-sm rounded-lg">
              <div className="card-body d-flex align-items-center">
                <div className={`card-icon-wrapper rounded-circle me-3 ${stat.colorClass}`}>
                  <i className={`${stat.icon} card-icon`}></i>
                </div>
                <div>
                  <h5 className="card-title mb-1">{stat.title}</h5>
                  <p className="card-text fw-bold mb-0">{stat.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* You can add more sections here, e.g., charts, recent activity tables, etc. */}
      <div className="row">
        <div className="col-12 col-lg-8 mb-4">
          <div className="dashboard-section p-4 shadow-sm rounded-lg">
            <h3 className="section-title">Actividad Reciente</h3>
            <p>Aquí podrías mostrar un listado de las últimas citas, altas de pacientes o ventas de productos.</p>
            {/* Placeholder for a table or list */}
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Consulta a 'Max' (Perro) - Dr. Pérez
                    <span className="badge bg-primary rounded-pill">Hace 2 horas</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Vacunación a 'Luna' (Gato) - Dra. Gómez
                    <span className="badge bg-success rounded-pill">Ayer</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Venta: Alimento Premium para Gatos
                    <span className="badge bg-info rounded-pill">Hace 4 horas</span>
                </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <div className="dashboard-section p-4 shadow-sm rounded-lg text-center">
            <h3 className="section-title">Recordatorios</h3>
            <p>Agenda de tareas importantes para el día.</p>
            <i className="bi bi-bell-fill text-warning display-4 mb-3"></i>
            <p className="text-muted">No hay recordatorios urgentes por ahora.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;