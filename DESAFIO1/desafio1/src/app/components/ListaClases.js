import React from "react";

const ListaClases = ({ clases, reservar }) => (
  <div>
    <h2>Clases Disponibles</h2>
    <ul className="list-group">
      {clases.map((c) => (
        <li key={c.id} className="list-group-item d-flex justify-content-between align-items-center">
          {c.nombre} - {c.horario} - Cupos: {c.cupos}
          <button
            className="btn btn-primary"
            onClick={() => reservar(c.id)}
            disabled={c.cupos === 0}
          >
            Reservar
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ListaClases;
