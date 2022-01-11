import React, { useState } from "react";
import { createRegister } from "../actions/nominas";
import { useDispatch } from "react-redux";
import swal from 'sweetalert';

const FormAdd = () => {
  const [viemForm, setviemForm] = useState(false);
  const [cantidadPago, setcantidadPago] = useState({
    precioHoras: 0,
    horas: 0,
  });
  const { horas, precioHoras } = cantidadPago;

  const dispatch = useDispatch();
  const handleAdd = () => {
    setviemForm(!viemForm);
  };
  const handleChange = (e) => {
    setcantidadPago({
      ...cantidadPago,
      [e.target.name]: e.target.value,
    });
  };
  const formato = new Intl.NumberFormat("de-DE")
  const handleCalculo = () => {
    parseInt(horas)
    parseInt(precioHoras)
    if ( horas >= 0 && precioHoras >= 0 ) {
      const cantidaFinal = formato.format(horas * precioHoras);
       console.log(cantidaFinal)
      dispatch(createRegister(cantidaFinal));
      setcantidadPago({
        precioHoras: 0,
        horas: 0,
      });
    } else {
      swal("'tienes que ingresas valores numericos'", {
        buttons: false,
        icon: 'error',
        timer: 2000,
      });
    }
    
  };
  return (
    <div>
      
      {viemForm === false ? (
        <button onClick={handleAdd} className="btn waves-effect waves-light">
          Agregar
        </button>
      ) : (
        <button onClick={handleAdd} className="waves-effect waves-light btn">
          Cerrar
        </button>
      )}
      {viemForm && (
        <div>
          <input
            type="text"
            name="precioHoras"
            placeholder="Igresa cantidad por pagar"
            value={precioHoras === 0 ? "" : precioHoras}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="horas"
            placeholder="Igresa cantidad de horas"
            value={horas === 0 ? "" : horas}
            onChange={handleChange}
          ></input>
          <button className="waves-effect waves-light btn purple" onClick={handleCalculo}>
            hacer el calculo
          </button>
        </div>
      )}
    </div>
  );
};

export default FormAdd;
