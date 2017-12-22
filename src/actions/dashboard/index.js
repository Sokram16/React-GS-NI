import * as types from './actions';

export const abrirForm = (type) =>{
    switch (type){
        case 'bodega':
            return {
                type: types.ABRIR_FORM_BODEGA
            };
    }
};

export const cerrarForm = (type) =>{
    switch (type){
        case 'bodega':
            return {
                type: types.CERRAR_FORM_BODEGA
            };
    }
};
