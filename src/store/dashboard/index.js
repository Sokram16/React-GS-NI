import update from 'react-addons-update';
import * as types from '../../actions/dashboard/actions';


const initialState = {
    bodegaForm: {}
};

const dashboard = (state = initialState, action) => {
    switch (action.type) {

        case types.ABRIR_FORM_BODEGA:
            return update(state, {
                bodegaForm: {
                    abierto: {$set: true},
                    dataForm: {$set: [] }
                }
            });

        case types.CERRAR_FORM_BODEGA:
            return update(state, {
                bodegaForm: {
                    abierto: {$set: false}
                }
            });

        default:
            return state;
    }
};

export default dashboard;