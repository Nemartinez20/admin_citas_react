import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ crearCita }) {
  const [cita, setCita] = useState({
    nombremascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  //===================FUNCIONES===================================

  //funcion que se ejecuta cada vex que el usuario escribe algo
  const actualizarFormulario = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores de la cita
  const { nombremascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario presiona el boton submit
  const submitCita = (e) => {
    e.preventDefault();

    //validar
    if (
      nombremascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      console.log("los campos no deben ir vacios");
      return;
    }

    //Eiminar msj previo de error
    setError(false);

    // Asignar ID
    cita.id = uuidv4();

    //Crear cita
    crearCita(cita);
    //Reiniciar Form
    setCita({
      nombremascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2 className="subtitle">Crear Cita</h2>

      <form onSubmit={submitCita}>
        {error ? (
          <div className="alerta">
            <p className="error">Todos los campos on obligatorios</p>
          </div>
        ) : null}
        <div className="campo">
          <label htmlFor="nombremascota">Nombre</label>
          <input
            type="text"
            placeholder="nombre de mascota"
            name="nombremascota"
            onChange={actualizarFormulario}
            value={nombremascota}
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
