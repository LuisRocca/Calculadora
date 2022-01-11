import { db } from "../firebase/config-firebase"
import { types } from "../types/types";

export const createRegister = (pago) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
    
        const datos = {
          fecha: new Date().toLocaleDateString(),
          pago,
        };

        // console.log(uid, "uid linea 12 nomina js")
    
        const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);
    
        const id = await referencia.id;
    
        const newData = {
          ...datos,
          id,
        };
    
        // console.log(newData, "linea 21")
        dispatch(crear(newData));
      };
}

export const leerRegistros = (data) => {
    return {
        type: types.nominaRead,
        payload: data,
    };
};

export const crear = (data) => {
  return {
    type: types.nominaAdd,
    payload: data
}
}

export const borrarRegistro = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    await db.doc(`${uid}/nominas/nomina/${id}`).delete();

    dispatch(borrar(id));
  };
  }

export const borrar = (id) => {
return {
  type: types.nominaDelete,
  payload: id
}
}

export const limpiar = () => {
  return {
    type: types.nominaClear,
  }
}