import update from 'react-addons-update';
import * as types from '../../actions/bodega/actions';


const initialState = {
    dataBodega: []
};


const bodega = (state = initialState, action) => {
    switch (action.type) {

        case types.REFRESH_DATA_BODEGA:
            return update(state, {
                dataBodega: {
                    $set: action.lista
                }
            });

        default:
            return state;
    }
};

export default bodega;