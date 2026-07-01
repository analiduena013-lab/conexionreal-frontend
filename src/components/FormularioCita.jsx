import { useState } from "react";
import axios from "axios";

function FormularioCita() {
    // Estado encargado de almacenar la información de la cita médica

  const [cita, setCita] = useState({
    paciente: "",
    medico: "",
    fecha: "",
    hora: ""
  });


  const manejarCambio = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

// Función que envía los datos de la cita al backend
  const registrarCita = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/citas",
        cita
      );

      alert("Cita registrada correctamente");

    } catch (error) {

      console.log(error);

      alert("Error al registrar la cita");

    }
};


  return (
    <div>

      <h2>Registrar Cita Médica</h2>

      <form onSubmit={registrarCita}>

        <label>Nombre del paciente:</label>
        <br />

        <input
          type="text"
          name="paciente"
          value={cita.paciente}
          onChange={manejarCambio}
        />


        <br /><br />


        <label>Médico:</label>
        <br />

        <input
          type="text"
          name="medico"
          value={cita.medico}
          onChange={manejarCambio}
        />


        <br /><br />


        <label>Fecha:</label>
        <br />

        <input
          type="date"
          name="fecha"
          value={cita.fecha}
          onChange={manejarCambio}
        />


        <br /><br />


        <label>Hora:</label>
        <br />

        <input
          type="time"
          name="hora"
          value={cita.hora}
          onChange={manejarCambio}
        />


        <br /><br />


        <button type="submit">
          Registrar cita
        </button>


      </form>

    </div>
  );
}


export default FormularioCita;