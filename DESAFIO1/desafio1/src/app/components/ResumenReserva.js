import React from "react";

const ResumenReserva = ({ reservas, cancelar }) => (
  <div className="mt-4">
    <h2>Mis Reservas</h2>
    {reservas.length === 0 ? (
      <p>No tienes reservas aún.</p>
    ) : (
      <ul className="list-group">
        {reservas.map((r) => (
          <li key={r.id} className="list-group-item d-flex justify-content-between align-items-center">
            {r.nombre} - {r.horario}
            <button className="btn btn-danger" onClick={() => cancelar(r.id)}>
              Cancelar
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ResumenReserva;
