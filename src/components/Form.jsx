import { useState } from "react";

export default function Form() {
  const [cita, setCita] = useState({
    nombre: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //funcion que se ejecuta cada vex que el usuario escribe algo
  const actualizarFormulario = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores de la cita
  const { nombre, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario opresiona el boton
  const submitCita = (e) => {
    e.preventDefault();
    console.log("enviando form.. ");
  };

  return (
    <>
      <h2 className="subtitle">Crear Cita</h2>
      <form onSubmit={submitCita}>
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="nombre de mascota"
            name="nombre"
            onChange={actualizarFormulario}
            value={nombre}
          />
        </div>
        <div className="campo">
          <label htmlFor="propietario">Nombre dueño</label>
          <input
            type="text"
            placeholder="nombre dueño de la mascota"
            name="propietario"
            onChange={actualizarFormulario}
            value={propietario}
          />
        </div>
        <div className="campo">
          <label htmlFor="fecha">Fecha</label>
          <input
            type="date"
            name="fecha"
            onChange={actualizarFormulario}
            value={fecha}
          />
        </div>
        <div className="campo">
          <label htmlFor="hora">Hora</label>
          <input
            type="time"
            name="hora"
            onChange={actualizarFormulario}
            value={hora}
          />
        </div>
        <div className="campo">
          <label htmlFor="sintomas">Sintomas</label>
          <textarea
            id=""
            name="sintomas"
            onChange={actualizarFormulario}
            value={sintomas}
          ></textarea>
        </div>

        <div className="camposubmit">
          <button type="submit">Agregar cita</button>
        </div>
      </form>
    </>
  );
}
