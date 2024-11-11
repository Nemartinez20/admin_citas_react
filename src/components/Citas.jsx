export default function Citas({ cita, eliminarCita }) {
  const { id, nombremascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <>
      <div className="card_cita">
        <div className="cita">
          <p className="cita_title">
            Mascota: <span>{nombremascota}</span>
          </p>
          <p className="cita_title">
            Dueño: <span>{propietario}</span>
          </p>
          <p className="cita_title">
            Fecha: <span>{fecha}</span>
          </p>
          <p className="cita_title">
            Mascota: <span>{hora}</span>
          </p>
          <p className="cita_title">
            Sintomas: <span>{sintomas}</span>
          </p>

          <div className="cita_button">
            <button
              className="btn__eliminar_cita"
              onClick={() => eliminarCita(id)}
            >
              Eliminar
            </button>
            <button className="btn__editar_cita">Editar</button>
          </div>
        </div>
      </div>
    </>
  );
}
