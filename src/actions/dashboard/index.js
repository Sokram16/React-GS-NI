import * as types from 'actions';


export const start_request = () =>{
    return {
        type: types.START_REQUEST
    };
};

export const end_request = () =>{
    return {
        type: types.END_REQUEST
    };
};