import { useState } from "react";

import Form from "./components/Form";
import Citas from "./components/Citas";

function App() {
  const [citasAll, setCitasAll] = useState([]);

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
            <h2 className="subtitle">Administra tus citas</h2>
            {citasAll.length === 0 ? (
              <h2 className="subtitle">No hay citas | Agrega una </h2>
            ) : (
              citasAll.map((cita) => (
                <Citas key={cita.id} cita={cita} eliminarCita={eliminarCita} />
              ))
            )}
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
