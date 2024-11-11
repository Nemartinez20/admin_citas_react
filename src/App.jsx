import { useState, useEffect } from "react";

import Form from "./components/Form";
import Citas from "./components/Citas";

function App() {
  //Citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citasAll, setCitasAll] = useState(citasIniciales);

  //useEffect para realizar tareas cuando las citas cmbien o el arreglo de dependecias

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citasAll));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citasAll]);

  //Crear citas
  const crearCita = (cita) => {
    setCitasAll([...citasAll, cita]);
  };

  //Eliminar cita
  const eliminarCita = (id) => {
    const nuevasCitas = citasAll.filter((cita) => cita.id !== id);
    setCitasAll(nuevasCitas);
    // console.log(citas);
  };

  // titulo condicional
  const titulo =
    citasAll.length === 0
      ? "No hay citas | Agrega una "
      : "Administra tus citas";

  //Render a la vista
  return (
    <>
      <main className="main">
        <h2 className="titulo">Adminisrador de Citas</h2>
        <section className="conteiner">
          <div className="container__form item">
            <Form crearCita={crearCita} />
          </div>
          <div className="container__citas item">
            <h2 className="subtitle">{titulo}</h2>
            {citasAll.map((cita) => (
              <Citas key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </section>
        <footer className="footer">
          <p>
            Realizado por Nestor Martinez &copy; Todos los derechos reservados
            2024
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
