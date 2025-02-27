import { useState } from "react";
import ListaClases from "./ListaClases";
import ResumenReserva from "./ResumenReserva";
import "bootstrap/dist/css/bootstrap.min.css";

const clasesIniciales = [
  { id: 1, nombre: "Yoga", horario: "10:00 AM", cupos: 10 },
  { id: 2, nombre: "Spinning", horario: "12:00 PM", cupos: 8 },
  { id: 3, nombre: "Pesas", horario: "02:00 PM", cupos: 5 },
];

export default function ReservaClase() {
  const [clases, setClases] = useState(clasesIniciales);
  const [reservas, setReservas] = useState([]);

  const reservar = (id) => {
    const clase = clases.find((c) => c.id === id);
    if (reservas.some((r) => r.id === id)) {
      alert("Ya tienes esta clase reservada.");
      return;
    }
    setClases((prevClases) =>
      prevClases.map((c) =>
        c.id === id && c.cupos > 0 ? { ...c, cupos: c.cupos - 1 } : c
      )
    );
    setReservas([...reservas, clase]);
    alert("Reserva confirmada para " + clase.nombre);
  };

  const cancelar = (id) => {
    setClases((prevClases) =>
      prevClases.map((c) => (c.id === id ? { ...c, cupos: c.cupos + 1 } : c))
    );
    setReservas(reservas.filter((r) => r.id !== id));
    alert("Reserva cancelada.");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Reserva de Clases - Gimnasio</h1>
      <ListaClases clases={clases} reservar={reservar} />
      <ResumenReserva reservas={reservas} cancelar={cancelar} />
    </div>
  );
}
