import * as types from './actions';

export const abrirForm = (abrir) =>{
    return {
        type: types.ABRIR_FORM,
        abrir
    };
};

export const dataFormulario = (data) =>{
    return {
        type: types.DATA_FORM,
        data
    };
};

export const peticionDeDatos = (data) =>{
  return{
      type: types.PETICION_DE_DATOS,
      estado: data
  }
};