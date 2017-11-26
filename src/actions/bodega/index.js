import * as typesDashboard from '../dashboard/actions';
import * as typesBodega from '../bodega/actions';
import axios from 'axios';

export const loadAllBodegas = () => {

    return (dispatch) => {

        dispatch({type: typesDashboard.START_REQUEST});

        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(function (response) {
                dispatch({type: typesDashboard.END_REQUEST});
                dispatch({type: typesBodega.REFRESH_DATA_BODEGA, lista: response.data});
            })
            .catch(function (error) {
                dispatch({type: typesDashboard.END_REQUEST});
            });

    }

};