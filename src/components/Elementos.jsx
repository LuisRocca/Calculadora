import React from "react";
import { useDispatch } from "react-redux";
import { borrarRegistro } from "../actions/nominas";

const Elementos = ({ data }) => {
//   console.log(data.nomina, "linea4");
  const { fecha, pago, id } = data;

  let fechaFormato;

  if (fecha.seconds) {
    const date = fecha.toDate();
    fechaFormato = date.toLocaleDateString();
  } else {
    fechaFormato = fecha;
  }
  const dispatch = useDispatch()
  const handleDelete = () => {
     dispatch(borrarRegistro(id))
  }

 

  return (
    <>
      <td>{fechaFormato}</td>
      <td>${pago}</td>
      <td>
        <button onClick={handleDelete} className="btn red">
          <i className="material-icons">delete_forever</i>
        </button>
      </td>
    </>
  );
};

export default Elementos;
