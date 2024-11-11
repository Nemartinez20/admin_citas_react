import { useState } from "react";

import Form from "./components/Form";
import Citas from "./components/Citas";

function App() {
  const [citasAll, setCitasAll] = useState([]);

  const crearCita = (cita) => {
    console.log([cita]);
    setCitasAll([...citasAll, cita]);
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
            <Citas />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
