import update from 'react-addons-update';
import * as types from '../../actions/dashboard/actions';


const initialState = {
    loadingData: false
};


const dashboard = (state = initialState, action) => {
    switch (action.type) {

        case types.START_REQUEST:
            return update(state, {
                loadingData: {
                    $set: true
                }
            });

        case types.END_REQUEST:
            return update(state, {
                loadingData: {
                    $set: false
                }
            });

        default:
            return state;
    }
};

export default dashboard;