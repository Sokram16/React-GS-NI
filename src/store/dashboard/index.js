import update from 'react-addons-update';
import * as types from '../../actions/dashboard/actions';


const initialState = {
    abrirFormulario: false,
    dataFormulario: []
};

const dashboard = (state = initialState, action) => {
    switch (action.type) {


        case types.ABRIR_FORM:
            return update(state, {
                abrirFormulario: {$set: action.abrir},
                dataFormulario: {$set: []}
            });

        case types.DATA_FORM:
            return update(state, {
                abrirFormulario: {$set: true},
                dataFormulario: {$set: action.data}
            });


        default:
            return state;
    }
};

export default dashboard;