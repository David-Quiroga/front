import React from "react";

const DashboardFacturacion = () => {
  const ingresosMes = 1250.75;
  const facturasEmitidas = 48;
  const pagosPendientes = 5;
  const promedioDiario = 41.69;

  const cardData = [
    {
      titulo: "Ingresos del mes",
      valor: `$${ingresosMes.toFixed(2)}`,
      colorValor: "text-primary",
      icono: "💰",
    },
    {
      titulo: "Facturas emitidas",
      valor: facturasEmitidas,
      colorValor: "text-success",
      icono: "🧾",
    },
    {
      titulo: "Pagos pendientes",
      valor: pagosPendientes,
      colorValor: "text-warning",
      icono: "⏳",
    },
    {
      titulo: "Promedio diario",
      valor: `$${promedioDiario.toFixed(2)}`,
      colorValor: "text-info",
      icono: "📅",
    },
  ];

  return (
    <div className="container py-4">
      <h2 className="mb-4">Resumen Facturación</h2>
      <div className="row g-3">
        {cardData.map(({ titulo, valor, colorValor, icono }, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <div className="card shadow-sm">
              <div className="card-body d-flex align-items-center gap-3">
                <div style={{ fontSize: "2rem", userSelect: "none" }}>{icono}</div>
                <div>
                  <h6 className="card-title mb-1">{titulo}</h6>
                  <p className={`card-text fs-4 fw-bold m-0 ${colorValor}`}>{valor}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardFacturacion;
